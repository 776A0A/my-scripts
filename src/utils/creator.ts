import globby from 'globby'
import Spinner from './spinner'
import console from './console'

type Checker = (...args: any[]) => any

interface Props {
    finalTemplate: { [key: string]: any }
    spinner: Spinner
    checkers: Set<Checker>
    plugins: Set<any>
}

class Creator implements Props {
    finalTemplate = {}
    spinner = new Spinner()
    checkers = new Set() as Set<Checker>
    plugins = new Set()

    async create() {
        this.spinner.start()

        await Promise.all(this.doCheck())
    }

    exitIfError(isError, msg) {
        if (isError) {
            console.error(msg)
            this.spinner.stop(false)
            process.exit(1)
        }
    }

    addPlugin(plugin) {
        this.plugins.add(plugin)
    }

    runPlugin() {
        this.plugins.forEach((plugin) => plugin.exec())
    }

    addChecker(checker) {
        this.checkers.add(checker)
    }

    doCheck() {
        return [...this.checkers].map((checker) => checker())
    }

    clearChecker(...args) {
        if (args.length === 0) {
            this.checkers = new Set()
        } else {
            this.checkers = [...this.checkers].filter(
                (checker) => ![...args].includes(checker)
            )
        }
    }
}

export default Creator
