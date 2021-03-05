#!/usr/bin/env node

'use strict'

const inquirer = require('inquirer')
const ora = require('ora')
const { spawn } = require('child_process')
const { log } = require('console')
const chalk = require('chalk')
const commander = require('commander')
const { validateEmpty } = require('../utils')

function ask(address) {
    const defaultProjectName = address.split('/')[1]

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectName',
                message: '请输入项目名称，格式为 "username/rep-name"',
                validate: validateEmpty,
                default: defaultProjectName,
            },
            {
                type: 'input',
                name: 'commitMessage',
                message: '请输入您的第一条 commit message',
                default: 'first commit',
            },
            {
                type: 'input',
                name: 'branchName',
                message: '请输入分支名称',
                default: 'main',
            },
        ])
        .then(({ projectName, commitMessage, branchName }) => {
            const spinner = ora(`${chalk.yellow('初始化...')}\n`)
            spinner.start()

            const cmdLines = `echo "# ${projectName}" >> README.md && git init && git add README.md && git commit -m "${commitMessage}" && git branch -M ${branchName} && git remote add origin git@github.com:${address}.git && git push -u origin ${branchName}`

            spawn(cmdLines, [], {
                cwd: process.cwd(),
                stdio: 'inherit',
                shell: true,
            })
                .on('exit', () => {
                    spinner.succeed('初始化成功!\n')
                })
                .on('error', (err) => {
                    spinner.fail(`${chalk.red('初始化失败')}\n`)
                    log(err)
                })
        })
}

module.exports = {
    register: () => {
        commander
            .command('init-gh-rep <address>')
            .description('初始化一个 github 仓库', { address: '您的项目地址' })
            .action(ask)
    },
}
