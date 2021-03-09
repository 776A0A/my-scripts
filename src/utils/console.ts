import { log, error } from 'console'
import chalk from 'chalk'

export default {
    log,
    error(msg: string) {
        error(chalk.cyan(`${msg}\n`))
    },
}
