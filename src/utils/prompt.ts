import inquirer, { Question, ListQuestion } from 'inquirer'
import { Plugin } from './creator'

type PromptQuestion = Question | ListQuestion

class Prompt extends Plugin {
    questions: Array<PromptQuestion> = []

    exec() {
        //
    }

    injectQuestions(question: PromptQuestion) {
        if (this.has(question)) {
            console.error(`Multiple name: ${question.name}`)
        } else {
            this.questions.push(question)
        }

        return {
            add: (_question: PromptQuestion) => this.injectQuestions(_question),
        }
    }

    ask() {
        return inquirer.prompt(this.questions).then((answers) => {
            this.reset()
            return answers
        })
    }

    reset() {
        this.questions = []
    }

    has(question: PromptQuestion) {
        return this.questions.some(({ name }) => name === question.name)
    }
}

export default Prompt
