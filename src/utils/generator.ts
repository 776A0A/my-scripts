import path from 'path'
import globby from 'globby'
import fs from 'fs-extra'
import { merge } from 'lodash'
import chalk from 'chalk'
import console from './console'
import { Plugin } from './creator'

interface Props {
    finalTemplate: Json
    templatePath: string
}

interface Json {
    [key: string]: any
}

type PkgDepName =
    | 'dependencies'
    | 'devDependencies'
    | 'peerDependencies'
    | 'bundledDependencies'
    | 'optionalDependencies'

// 生成模板
class Generator extends Plugin implements Props {
    finalTemplate = {} as Json
    templatePath = ''

    async exec() {
        if (!this.templatePath) {
            this.commander?.exitIfError(true, '没有传入模板路径！')
        }

        await this.generate()
    }

    async generate() {
        this.isPkgExisting()

        await this.resolveTemplateFiles()
        this.writeFileToLocal()

        this.resetFinalTemplate()

        return this
    }

    addTemplatePath(templatePath: string) {
        this.templatePath = templatePath
    }

    async resolveTemplateFiles() {
        const templatePath = this.templatePath
        // 读取template目录下的文件
        const fileNames = await globby(['**/*'], {
            cwd: templatePath,
            dot: true, // 以点开头的文件也加入
        })

        // 将内容解析到finalTemplate中
        fileNames.forEach((fileName) => {
            this.extendFinalTemplate(fileName, this.getFileContent(fileName))
        })

        this.extendPkg()
    }

    getFileContent(fileName: string) {
        const absFilePath = path.resolve(this.templatePath, fileName)
        return fs.readFileSync(absFilePath, 'utf-8')
    }

    extendFinalTemplate(fileName: string, content: any) {
        this.finalTemplate[fileName] = content
    }

    resetFinalTemplate() {
        this.finalTemplate = {}
    }

    extendPkg() {
        const pkgPath = path.join(process.cwd(), 'package.json')

        const existingPkg = require(pkgPath)
        const templatePkg = JSON.parse(this.finalTemplate['package.json'])

        this.resolveConflictDepMainVersion(existingPkg, templatePkg)

        this.finalTemplate['package.json'] = JSON.stringify(
            merge(existingPkg, templatePkg),
            null,
            4
        )
    }

    writeFileToLocal() {
        const entries = Object.entries(this.finalTemplate)

        entries.forEach(([fileName, stringContent]) => {
            fs.writeFileSync(fileName, stringContent)
            console.log(`${fileName} 写入成功！`)
        })
    }

    resolveConflictDepMainVersion(existingPkg: Json, templatePkg: Json) {
        const depKeys: PkgDepName[] = [
            'dependencies',
            'devDependencies',
            'peerDependencies',
            'bundledDependencies',
            'optionalDependencies',
        ]

        depKeys.forEach((key) => {
            const existingDeps = existingPkg[key],
                templateDeps = templatePkg[key]

            if (!existingDeps || !templateDeps) return

            this.compareDeps(existingPkg[key], templatePkg[key])
        })
    }

    compareDeps(existingDeps: Json, templateDeps: Json) {
        const existingDepsKeys = Object.keys(existingDeps)

        existingDepsKeys.forEach((depKey) => {
            if (!templateDeps[depKey]) return

            const existingDepMainVersion = pickMainVersion(existingDeps[depKey])
            const templateDepMainVersion = pickMainVersion(templateDeps[depKey])

            this.commander?.exitIfError(
                existingDepMainVersion !== templateDepMainVersion,
                `The two main version of ${chalk.redBright(
                    depKey
                )} are conflict!`
            )
        })

        function pickMainVersion(version: string) {
            return version.split('.')[0].replace(/\D*/, '')
        }
    }

    isPkgExisting() {
        const pkgPath = path.join(process.cwd(), 'package.json')
        const isExisting = fs.existsSync(pkgPath)

        this.commander?.exitIfError(
            !isExisting,
            `没有检测到 package.json，请使用 ${chalk.redBright(
                'npm init'
            )} 进行初始化！`
        )
    }
}

export default Generator
