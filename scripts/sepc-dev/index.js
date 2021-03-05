#!/usr/bin/env node

'use strict'

const commander = require('commander')
const path = require('path')
const { Generator } = require('../../utils/index')

const inject = async () => {
    // TODO 给予会被覆盖的文件以警告
    // inquirer.prompt([
    //     {
    //         type: "confirm",
    //         message: ''
    //     }
    // ])

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
