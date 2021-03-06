const inquirer = require('inquirer')

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
    }

    ask() {
        return inquirer.prompt(this.questions)
    }

    reset() {
        this.questions = {}
    }

    has(question) {
        return this.questions.some(({ name }) => name === question.name)
    }
}

module.exports = Prompt
