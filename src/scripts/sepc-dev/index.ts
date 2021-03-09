#!/usr/bin/env node

'use strict'

import commander from 'commander'
import path from 'path'
import { Generator, Prompt } from '../../utils'

const inject = async () => {
    const prompt = new Prompt()
    // TODO 添加选择环境
    prompt
        .injectQuestions({
            type: 'confirm',
            name: 'continue',
            message:
                '.eslint.js、.prettier.js、.editorconfig 将会覆盖本地文件，继续吗？',
            default: false,
        })
        .add({
            type: 'confirm',
            name: 'autoInstall',
            message: '是否自动下载依赖？',
            default: true,
        })
        .add({
            type: 'list',
            name: 'installer',
            choices: ['yarn', 'cnpm', 'npm'],
            default: 0,
            when: (answers) => {
                if (answers.autoInstall) return true
                return false
            },
        })

    const answers = await prompt.ask()

    if (!answers.continue) return

    const generator = new Generator()
    // TODO 需要重构类，增加一个顶级父类，控制spinner，generator只负责生成，再新建一个install类，用于控制安装
    await generator
        .generate(path.resolve(__dirname, './template'))
        .then((g) => {
            if (answers.autoInstall) {
                g.installDeps()
            }
        })
}

module.exports = {
    register: () => {
        commander
            .command('spec-dev')
            .description('规范化开发流程')
            .action(inject)
    },
}
