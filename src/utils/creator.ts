import Spinner from './spinner'
import console from './console'

interface Props {
    spinner: Spinner
    checkers: Set<Checker>
    plugins: Set<Plugin>
}

type Checker = (...args: any[]) => any

export abstract class Plugin {
    commander: Creator | null = null
    abstract exec(): void
    inject(creator: Creator) {
        this.commander = creator
    }
}

class Creator implements Props {
    spinner = new Spinner()
    checkers = new Set() as Set<Checker>
    plugins = new Set() as Set<Plugin>

    async create() {
        this.spinner.start()

        await Promise.all(this.doCheck())
    }

    exitIfError(isError: boolean, msg: string) {
        if (isError) {
            console.error(msg)
            this.spinner.stop(false)
            process.exit(1)
        }
    }

    addPlugin(plugin: Plugin) {
        this.plugins.add(plugin)

        plugin.inject(this)

        return this
    }

    runPlugin() {
        this.plugins.forEach((plugin) => plugin.exec())
    }

    addChecker(checker: Checker) {
        this.checkers.add(checker)
    }

    doCheck() {
        return [...this.checkers].map((checker) => checker())
    }

    clearChecker(...args: Checker[]) {
        if (args.length === 0) {
            this.checkers = new Set()
        } else {
            this.checkers = new Set(
                [...this.checkers].filter(
                    (checker) => ![...args].includes(checker)
                )
            )
        }
    }
}

export default Creator
