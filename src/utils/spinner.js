'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
var ora_1 = __importDefault(require('ora'))
var Spinner = /** @class */ (function () {
    function Spinner() {
        this.spinner = ora_1.default({
            text: 'Start!\n',
            spinner: 'dots11',
        })
    }
    Spinner.prototype.start = function () {
        this.spinner.start()
    }
    Spinner.prototype.stop = function (state, text) {
        return state
            ? this.spinner.succeed(
                  text !== null && text !== void 0 ? text : 'Succeed!'
              )
            : this.spinner.fail(
                  text !== null && text !== void 0 ? text : 'Failed!'
              )
    }
    Object.defineProperty(Spinner.prototype, 'text', {
        set: function (text) {
            this.spinner.text = text
        },
        enumerable: false,
        configurable: true,
    })
    return Spinner
})()
exports.default = Spinner
