import execa from 'execa'
import chalk from 'chalk'
import { Plugin } from './creator'

// 安装依赖
class Installer extends Plugin {
    exec() {
        //
    }
    install() {
        return new Promise<void>((resolve, reject) => {
            const childProcess = execa('yarn', [], {
                cwd: process.cwd(),
                stdio: ['inherit', 'pipe', 'inherit'],
            })

            childProcess.stdout?.on('data', (buffer) => {
                process.stdout.write(buffer)
            })

            childProcess.on('close', (code) => {
                if (code !== 0) {
                    this.commander?.spinner.stop(false)
                    reject(
                        Error(
                            chalk.redBright(
                                'Error ocurred when installing deps!'
                            )
                        )
                    )
                }
                this.commander?.spinner.stop(true)
                resolve()
            })
        })
    }
}

export default Installer
