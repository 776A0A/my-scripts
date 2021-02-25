#!/usr/bin/env node
'use strict'

const commander = require('commander')
const pkg = require('../package.json')

commander
    .version(pkg.version, '-v, --version', 'output the current version')
    .option('-h, --help', 'get usage')

const initGhRep = require('./init-gh-rep')

initGhRep.register()

commander.parse(process.argv)
