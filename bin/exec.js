const path = require('path')
const minimist = require('minimist')
const execa = require('execa')

const argv = []

const options = minimist(process.argv.slice(2))

const commander = options._

if (commander.length > 0) argv.push(`${commander[0]}`)
if (options.v || options.version) argv.push('-v')
if (options.h || options.help) argv.push('-h')

execa(`npx ts-node "${path.resolve(__dirname, './register.ts')}"`, argv, {
    stdio: 'inherit',
    cwd: __dirname,
    shell: true,
})
