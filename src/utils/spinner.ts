import ora from 'ora'

class Spinner {
    start() {
        return (this.spinner = ora({
            text: 'Start!\n',
            spinner: 'dots11',
        }).start())
    }

    stop(state, text) {
        return state
            ? this.spinner.succeed(text ?? 'Succeed!')
            : this.spinner.fail(text ?? 'Failed!')
    }

    set text(text) {
        this.spinner.text = text
    }
}

export default Spinner
