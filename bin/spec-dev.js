#!/usr/bin/env node

'use strict'

const commander = require('commander')
const path = require('path')
const { merge } = require('lodash')
const fs = require('fs-extra')
const ora = require('ora')

function run() {
    const spinner = ora('开始写入规范...')
    spinner.start()

    const pkgPath = path.join(process.cwd(), 'package.json')
    const pkg = require(pkgPath)

    const pkgExtension = {
        scripts: {
            release: 'npx standard-version',
        },
        devDependencies: {
            'standard-version': '^9.1.1',
        },
    }

    const finalPkg = merge(pkg, pkgExtension)

    fs.writeFileSync(pkgPath, JSON.stringify(finalPkg, null, 4))

    spinner.succeed('写入完成!')
}

module.exports = {
    register: () => {
        commander.command('spec-dev').description('规范化开发流程').action(run)
    },
}
