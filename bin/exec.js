const { exec } = require('child_process')
const path = require('path')

exec(
    `npx ts-node "${path.resolve(__dirname, './register.ts')}"`,
    (error, stdout, stdin) => {
        console.log(stdout)
    }
)
