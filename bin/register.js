#!/usr/bin/env node
'use strict'

const commander = require('commander')
const pkg = require('../package.json')

commander
    .version(pkg.version, '-v, --version', 'output the current version')
    .option('-h, --help', 'get usage of sns')

const initGhRep = require('./init-gh-rep')
const initSpecDev = require('../scripts/sepc-dev')

runRegisterQueue([initGhRep, initSpecDev])

function runRegisterQueue(registers) {
    registers.forEach((r) => r.register())
}

commander.parse(process.argv)
