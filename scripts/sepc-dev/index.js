#!/usr/bin/env node

'use strict'

const commander = require('commander')
const path = require('path')
const { Generator, Prompt } = require('../../utils/index')

const inject = async () => {
    const prompt = new Prompt()

    prompt.injectQuestions({
        type: 'confirm',
        name: 'continue',
        message:
            '.eslint.js、.prettier.js、.editorconfig 将会覆盖本地文件，继续吗？',
        default: false,
    })

    const answers = await prompt.ask()

    if (!answers.continue) return

    const generator = new Generator()
    await generator.generate(path.resolve(__dirname, './template'))
}

module.exports = {
    register: () => {
        commander
            .command('spec-dev')
            .description('规范化开发流程')
            .action(inject)
    },
}
