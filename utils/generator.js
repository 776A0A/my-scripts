const path = require('path')
const globby = require('globby')
const fs = require('fs-extra')
const { merge } = require('lodash')
const { log, error } = require('console')
const execa = require('execa')
const chalk = require('chalk')
const Spinner = require('./spinner')

class Generator {
    constructor() {
        this.finalTemplate = {}
        this.spinner = new Spinner()
    }

    async generate(templatePath) {
        this.spinner.start()

        await this.resolveTemplateFiles(templatePath)
        this.writeFile()
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
        const isExist = fs.existsSync(pkgPath)

        if (!isExist) {
            error(
                chalk.red(
                    'Error: 没有检测到 package.json，请使用 npm init 进行初始化\n'
                )
            )
            this.spinner.stop(false)
            return process.exit(1)
        }

        const existingPkg = require(pkgPath)

        this.finalTemplate['package.json'] = JSON.stringify(
            merge(existingPkg, JSON.parse(this.finalTemplate['package.json'])),
            null,
            4
        )
    }

    writeFile() {
        const entries = Object.entries(this.finalTemplate)

        entries.forEach(([fileName, stringContent]) => {
            fs.writeFileSync(fileName, stringContent)
            log(`${fileName} 写入成功！`)
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
}

module.exports = Generator
