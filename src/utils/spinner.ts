import ora from 'ora'

class Spinner {
    spinner = ora({
        text: 'Start!\n',
        spinner: 'dots11',
    })

    start() {
        this.spinner.start()
    }

    stop(state: boolean, text?: string) {
        return state
            ? this.spinner.succeed(text ?? 'Succeed!')
            : this.spinner.fail(text ?? 'Failed!')
    }

    set text(text: string) {
        this.spinner.text = text
    }
}

export default Spinner
