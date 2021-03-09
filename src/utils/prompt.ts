import inquirer from 'inquirer'

class Prompt {
    constructor() {
        this.questions = []
    }

    injectQuestions(question) {
        if (this.has(question)) {
            console.error(`Multiple name: ${question.name}`)
        } else {
            this.questions.push(question)
        }

        return {
            add: (_question) => this.injectQuestions(_question),
        }
    }

    ask() {
        return inquirer.prompt(this.questions).then((answers) => {
            this.reset()
            return answers
        })
    }

    reset() {
        this.questions = {}
    }

    has(question) {
        return this.questions.some(({ name }) => name === question.name)
    }
}

export default Prompt
