#!/usr/bin/env node

'use strict'

import commander from 'commander'
import path from 'path'
import { Generator, Prompt, Creator, Installer } from '../../utils'

const inject = async () => {
    const creator = new Creator()
    const prompt = new Prompt()
    // TODO 添加选择环境
    prompt
        .injectQuestion({
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
            when: (answers) => answers.continue,
        })
        .add({
            type: 'list',
            name: 'installer',
            choices: ['yarn', 'cnpm', 'npm'],
            default: 0,
            when: (answers) => answers.autoInstall,
        })

    const generator = new Generator()
    generator.addTemplatePath(path.resolve(__dirname, './template'))

    const installer = new Installer()

    creator.addPlugin(prompt).addPlugin(generator).addPlugin(installer)

    await creator.create().runPlugin()
}

export default {
    register: () => {
        commander
            .command('spec-dev')
            .description('规范化开发流程')
            .action(inject)
    },
}
