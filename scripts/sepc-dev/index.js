#!/usr/bin/env node

'use strict'

const commander = require('commander')
const path = require('path')
const { merge } = require('lodash')
const fs = require('fs-extra')
const ora = require('ora')
const globby = require('globby')
const inquirer = require('inquirer')

const inject = async () => {
    // inquirer.prompt([
    //     {
    //         type: "confirm",
    //         message: ''
    //     }
    // ])

    const spinner = ora('开始写入规范...\n')
    spinner.start()

    const templatePath = path.resolve(__dirname, './template')

    const files = await globby(['**/*'], {
        cwd: templatePath,
        dot: true,
    })

    const filesObj = {}

    files.forEach((file) => {
        const absFilePath = path.resolve(templatePath, file)
        const text = fs.readFileSync(absFilePath, 'utf-8')
        filesObj[file] = text
    })

    const pkgPath = path.join(process.cwd(), 'package.json')
    const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {}

    const pkgTemplate = JSON.parse(filesObj['package.json'])
    const finalPkg = merge(pkg, pkgTemplate)

    filesObj['package.json'] = JSON.stringify(finalPkg, null, 4)

    Object.entries(filesObj).forEach(([filePath, content]) => {
        fs.writeFileSync(filePath, content)
        console.log(`${filePath} 写入成功！`)
    })

    await new Promise((resolve) => {
        const execa = require('execa')
        const childProcess = execa('yarn', [], {
            cwd: process.cwd(),
            stdio: ['inherit', 'pipe', 'inherit'],
        })

        childProcess.stdout.on('data', (buffer) => {
            process.stdout.write(buffer)
        })
        childProcess.on('close', (code) => {
            if (code !== 0) return new Error(`command failed: ${code}`)
            resolve()
        })
    })

    spinner.succeed('写入完成!\n')
}

inject()

module.exports = {
    register: () => {
        commander
            .command('spec-dev')
            .description('规范化开发流程')
            .action(inject)
    },
}
