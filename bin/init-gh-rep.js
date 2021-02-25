#!/usr/bin/env node

'use strict'

const inquirer = require('inquirer')
const ora = require('ora')
const { spawn } = require('child_process')
const { log } = require('console')
const { validateEmpty } = require('../utils')
const chalk = require('chalk')
const commander = require('commander')

function ask() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Input a project name.',
                validate: validateEmpty,
            },
            {
                type: 'input',
                name: 'commitMessage',
                message: 'Input the commit message.',
                default: 'first commit',
            },
            {
                type: 'input',
                name: 'branchName',
                message: 'Input a branch name.',
                default: 'master',
            },
            {
                type: 'input',
                name: 'address',
                message: 'Input your project address',
                validate: validateEmpty,
            },
        ])
        .then(({ projectName, commitMessage, branchName, address }) => {
            const spinner = ora(`${chalk.yellow('Initializing...')}\n`)
            spinner.start()

            const cmdLines = `echo "# ${projectName}" >> README.md && git init && git add README.md && git commit -m "${commitMessage}" && git branch -M ${branchName} && git remote add origin git@github.com:${address}.git && git push -u origin ${branchName}`

            spawn(cmdLines, [], {
                cwd: process.cwd(),
                stdio: 'inherit',
                shell: true,
            })
                .on('exit', () => {
                    spinner.succeed('initial succeed!\n')
                })
                .on('error', (err) => {
                    spinner.fail(`${chalk.red('initial failed.')}\n`)
                    log(err)
                })
        })
}

const register = () => {
    commander
        .command('init-gh-rep')
        .description('init a github rep.')
        .action(ask)
}

module.exports = { register }
