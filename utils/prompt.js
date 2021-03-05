const inquirer = require('inquirer')

class Prompt {
    constructor() {
        this.questions = []
    }

    injectQuestions(question) {
        this.questions.push(question)
    }

    ask() {
        return inquirer.prompt(this.questions)
    }
}

module.exports = Prompt
