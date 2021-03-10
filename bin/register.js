#!/usr/bin/env node

'use strict'

const commander = require('commander')
const pkg = require('../package.json')

commander
    .version(pkg.version, '-v, --version', 'output the current version')
    .option('-h, --help', 'get usage of sns')

const initGhRep = require('./init-gh-rep')
const initSpecDev = require('../src/scripts/spec-dev')

runRegisterQueue([initGhRep, initSpecDev])

function runRegisterQueue(registers) {
    registers.forEach((r) => (r.default ? r.default.register() : r.register()))
}

commander.parse(process.argv)
