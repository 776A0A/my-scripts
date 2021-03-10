'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
var console_1 = require('console')
var chalk_1 = __importDefault(require('chalk'))
exports.default = {
    log: console_1.log,
    error: function (msg) {
        console_1.error(chalk_1.default.cyan(msg + '\n'))
    },
}
