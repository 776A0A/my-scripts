const path = require('path')
const globby = require('globby')
const fs = require('fs-extra')
const { merge } = require('lodash')
const execa = require('execa')
const chalk = require('chalk')
const Spinner = require('./spinner')
const console = require('./console')

class Generator {
    constructor() {
        this.finalTemplate = {}
        this.spinner = new Spinner()
    }

    async generate(templatePath) {
        this.spinner.start()

        await this.resolveTemplateFiles(templatePath)
        this.writeFile()
        this.resetFinalTemplate()
        await this.installDeps()
    }

    async resolveTemplateFiles(templatePath) {
        // 读取template目录下的文件
        const fileNames = await globby(['**/*'], {
            cwd: templatePath,
            dot: true,
        })

        // 将内容解析到finalTemplate中
        fileNames.forEach((fileName) => {
            this.extendFinalTemplate(
                fileName,
                this.getFileContent(templatePath, fileName)
            )
        })

        this.extendPkgIfExist()
    }

    getFileContent(templatePath, fileName) {
        const absFilePath = path.resolve(templatePath, fileName)
        return fs.readFileSync(absFilePath, 'utf-8')
    }

    extendFinalTemplate(fileName, content) {
        this.finalTemplate[fileName] = content
    }

    resetFinalTemplate() {
        this.finalTemplate = {}
    }

    extendPkgIfExist() {
        const pkgPath = path.join(process.cwd(), 'package.json')
        const isExisting = fs.existsSync(pkgPath)

        if (!isExisting) {
            return this.exitWithError(
                '没有检测到 package.json，请使用 npm init 进行初始化！'
            )
        }

        const existingPkg = require(pkgPath)
        const templatePkg = JSON.parse(this.finalTemplate['package.json'])

        this.resolveConflictDepMainVersion(existingPkg, templatePkg)

        this.finalTemplate['package.json'] = JSON.stringify(
            merge(existingPkg, templatePkg),
            null,
            4
        )
    }

    writeFile() {
        const entries = Object.entries(this.finalTemplate)

        entries.forEach(([fileName, stringContent]) => {
            fs.writeFileSync(fileName, stringContent)
            console.log(`${fileName} 写入成功！`)
        })
    }

    installDeps() {
        this.spinner.text = ''

        return new Promise((resolve, reject) => {
            const childProcess = execa('yarn', [], {
                cwd: process.cwd(),
                stdio: ['inherit', 'pipe', 'inherit'],
            })

            childProcess.stdout.on('data', (buffer) => {
                process.stdout.write(buffer)
            })

            childProcess.on('close', (code) => {
                if (code !== 0) {
                    this.spinner.stop(false)
                    reject(
                        Error(chalk.red('Error ocurred when installing deps!'))
                    )
                }
                this.spinner.stop(true)
                resolve()
            })
        })
    }

    resolveConflictDepMainVersion(existingPkg, templatePkg) {
        const depKeys = [
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

    compareDeps(existingDeps, templateDeps) {
        const existingDepsKeys = Object.keys(existingDeps)

        existingDepsKeys.forEach((depKey) => {
            if (!templateDeps[depKey]) return

            const existingDepMainVersion = pickMainVersion(existingDeps[depKey])
            const templateDepMainVersion = pickMainVersion(templateDeps[depKey])

            if (existingDepMainVersion !== templateDepMainVersion) {
                this.exitWithError(
                    `The two main version of ${chalk.redBright(
                        depKey
                    )} are conflict!`
                )
            }
        })

        function pickMainVersion(version) {
            return version.split('.')[0].replace(/\D*/, '')
        }
    }

    exitWithError(msg) {
        console.error(msg)
        this.spinner.stop(false)
        process.exit(1)
    }
}

module.exports = Generator
