import commander from 'commander'
import pkg from '../package.json'
import { Commander } from '../src/types'

commander
    .version(pkg.version, '-v, --version', 'output the current version')
    .option('-h, --help', 'get usage of sns')

// const initGhRep = require('./init-gh-rep')
import initSpecDev from '../src/scripts/spec-dev'

runRegisterQueue([initSpecDev])

function runRegisterQueue(registers: Commander[]) {
    registers.forEach((r) => r.register())
}

commander.parse(process.argv)
