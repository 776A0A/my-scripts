import Spinner from './spinner'
import console from './console'
import { Answers } from 'inquirer'

interface Props {
    answers: Answers
    spinner: Spinner
    checkers: Set<Checker>
    plugins: Set<Plugin>
    hooks: Hooks
}

type Hooks = {
    [key in HookType]?: Array<Hook>
}

type Hook = () => void

type Checker = (...args: any[]) => any

export abstract class Plugin {
    commander: Creator | null = null
    abstract exec?(...args: any[]): any
    inject(creator: Creator) {
        this.commander = creator
    }
}

type HookType = 'start' | 'end'

class Creator implements Props {
    answers: Answers = {}
    spinner = new Spinner()
    checkers: Set<Checker> = new Set()
    plugins: Set<Plugin> = new Set()
    hooks: Hooks = {}

    async create() {
        this.spinner.start()
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

    async runPlugin() {
        const plugins = [...this.plugins]

        let results

        for (let i = 0; i < plugins.length; i++) {
            const plugin = plugins[i]
            results = await plugin.exec?.(results)
        }
    }

    injectHook(hook: HookType, cb: Hook) {
        ;(this.hooks[hook] || (this.hooks[hook] = [])).push(cb)
    }

    addAnswer(answers: Answers) {
        this.answers = answers
    }
}

export default Creator
