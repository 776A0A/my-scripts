import * as shelljs from 'shelljs'

shelljs
    .find('utils')
    .filter((file) => file.match(/\.jsx?$/))
    .forEach((file) => {
        const newName = file.replace(/\.j(sx?)$/, '.t$1')
        shelljs.mv(file, newName)
    })
