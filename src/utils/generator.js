'use strict'
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b
                    }) ||
                function (d, b) {
                    for (var p in b)
                        if (Object.prototype.hasOwnProperty.call(b, p))
                            d[p] = b[p]
                }
            return extendStatics(d, b)
        }
        return function (d, b) {
            extendStatics(d, b)
            function __() {
                this.constructor = d
            }
            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __())
        }
    })()
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected)
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            )
        })
    }
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1]
                    return t[1]
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function () {
                    return this
                }),
            g
        )
        function verb(n) {
            return function (v) {
                return step([n, v])
            }
        }
        function step(op) {
            if (f) throw new TypeError('Generator is already executing.')
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y['return']
                                    : op[0]
                                    ? y['throw'] ||
                                      ((t = y['return']) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t
                    if (((y = 0), t)) op = [op[0] & 2, t.value]
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op
                            break
                        case 4:
                            _.label++
                            return { value: op[1], done: false }
                        case 5:
                            _.label++
                            y = op[1]
                            op = [0]
                            continue
                        case 7:
                            op = _.ops.pop()
                            _.trys.pop()
                            continue
                        default:
                            if (
                                !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0
                                continue
                            }
                            if (
                                op[0] === 3 &&
                                (!t || (op[1] > t[0] && op[1] < t[3]))
                            ) {
                                _.label = op[1]
                                break
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1]
                                t = op
                                break
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2]
                                _.ops.push(op)
                                break
                            }
                            if (t[2]) _.ops.pop()
                            _.trys.pop()
                            continue
                    }
                    op = body.call(thisArg, _)
                } catch (e) {
                    op = [6, e]
                    y = 0
                } finally {
                    f = t = 0
                }
            if (op[0] & 5) throw op[1]
            return { value: op[0] ? op[1] : void 0, done: true }
        }
    }
var __read =
    (this && this.__read) ||
    function (o, n) {
        var m = typeof Symbol === 'function' && o[Symbol.iterator]
        if (!m) return o
        var i = m.call(o),
            r,
            ar = [],
            e
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value)
        } catch (error) {
            e = { error: error }
        } finally {
            try {
                if (r && !r.done && (m = i['return'])) m.call(i)
            } finally {
                if (e) throw e.error
            }
        }
        return ar
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
var path_1 = __importDefault(require('path'))
var globby_1 = __importDefault(require('globby'))
var fs_extra_1 = __importDefault(require('fs-extra'))
var lodash_1 = require('lodash')
var chalk_1 = __importDefault(require('chalk'))
var console_1 = __importDefault(require('./console'))
var creator_1 = require('./creator')
// 生成模板
var Generator = /** @class */ (function (_super) {
    __extends(Generator, _super)
    function Generator() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this
        _this.finalTemplate = {}
        _this.templatePath = ''
        return _this
    }
    Generator.prototype.exec = function () {
        var _a
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.templatePath) {
                            ;(_a = this.commander) === null || _a === void 0
                                ? void 0
                                : _a.exitIfError(true, '没有传入模板路径！')
                        }
                        return [4 /*yield*/, this.generate()]
                    case 1:
                        _b.sent()
                        return [2 /*return*/]
                }
            })
        })
    }
    Generator.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isPkgExisting()
                        return [4 /*yield*/, this.resolveTemplateFiles()]
                    case 1:
                        _a.sent()
                        this.writeFileToLocal()
                        this.resetFinalTemplate()
                        return [2 /*return*/, this]
                }
            })
        })
    }
    Generator.prototype.addTemplatePath = function (templatePath) {
        this.templatePath = templatePath
    }
    Generator.prototype.resolveTemplateFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var templatePath, fileNames
            var _this = this
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        templatePath = this.templatePath
                        return [
                            4 /*yield*/,
                            globby_1.default(['**/*'], {
                                cwd: templatePath,
                                dot: true,
                            }),
                            // 将内容解析到finalTemplate中
                        ]
                    case 1:
                        fileNames = _a.sent()
                        // 将内容解析到finalTemplate中
                        fileNames.forEach(function (fileName) {
                            _this.extendFinalTemplate(
                                fileName,
                                _this.getFileContent(fileName)
                            )
                        })
                        this.extendPkg()
                        return [2 /*return*/]
                }
            })
        })
    }
    Generator.prototype.getFileContent = function (fileName) {
        var absFilePath = path_1.default.resolve(this.templatePath, fileName)
        return fs_extra_1.default.readFileSync(absFilePath, 'utf-8')
    }
    Generator.prototype.extendFinalTemplate = function (fileName, content) {
        this.finalTemplate[fileName] = content
    }
    Generator.prototype.resetFinalTemplate = function () {
        this.finalTemplate = {}
    }
    Generator.prototype.extendPkg = function () {
        var pkgPath = path_1.default.join(process.cwd(), 'package.json')
        var existingPkg = require(pkgPath)
        var templatePkg = JSON.parse(this.finalTemplate['package.json'])
        this.resolveConflictDepMainVersion(existingPkg, templatePkg)
        this.finalTemplate['package.json'] = JSON.stringify(
            lodash_1.merge(existingPkg, templatePkg),
            null,
            4
        )
    }
    Generator.prototype.writeFileToLocal = function () {
        var entries = Object.entries(this.finalTemplate)
        entries.forEach(function (_a) {
            var _b = __read(_a, 2),
                fileName = _b[0],
                stringContent = _b[1]
            fs_extra_1.default.writeFileSync(fileName, stringContent)
            console_1.default.log(fileName + ' \u5199\u5165\u6210\u529F\uFF01')
        })
    }
    Generator.prototype.resolveConflictDepMainVersion = function (
        existingPkg,
        templatePkg
    ) {
        var _this = this
        var depKeys = [
            'dependencies',
            'devDependencies',
            'peerDependencies',
            'bundledDependencies',
            'optionalDependencies',
        ]
        depKeys.forEach(function (key) {
            var existingDeps = existingPkg[key],
                templateDeps = templatePkg[key]
            if (!existingDeps || !templateDeps) return
            _this.compareDeps(existingPkg[key], templatePkg[key])
        })
    }
    Generator.prototype.compareDeps = function (existingDeps, templateDeps) {
        var _this = this
        var existingDepsKeys = Object.keys(existingDeps)
        existingDepsKeys.forEach(function (depKey) {
            var _a
            if (!templateDeps[depKey]) return
            var existingDepMainVersion = pickMainVersion(existingDeps[depKey])
            var templateDepMainVersion = pickMainVersion(templateDeps[depKey])
            ;(_a = _this.commander) === null || _a === void 0
                ? void 0
                : _a.exitIfError(
                      existingDepMainVersion !== templateDepMainVersion,
                      'The two main version of ' +
                          chalk_1.default.redBright(depKey) +
                          ' are conflict!'
                  )
        })
        function pickMainVersion(version) {
            return version.split('.')[0].replace(/\D*/, '')
        }
    }
    Generator.prototype.isPkgExisting = function () {
        var _a
        var pkgPath = path_1.default.join(process.cwd(), 'package.json')
        var isExisting = fs_extra_1.default.existsSync(pkgPath)
        ;(_a = this.commander) === null || _a === void 0
            ? void 0
            : _a.exitIfError(
                  !isExisting,
                  '\u6CA1\u6709\u68C0\u6D4B\u5230 package.json\uFF0C\u8BF7\u4F7F\u7528 ' +
                      chalk_1.default.redBright('npm init') +
                      ' \u8FDB\u884C\u521D\u59CB\u5316\uFF01'
              )
    }
    return Generator
})(creator_1.Plugin)
exports.default = Generator
