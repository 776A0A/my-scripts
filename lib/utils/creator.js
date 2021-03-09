"use strict";
const globby = require('globby');
const Spinner = require('./spinner');
const console = require('./console');
class Creator {
    constructor() {
        this.finalTemplate = {};
        this.spinner = new Spinner();
        this.checkers = new Set();
        this.plugins = new Set();
    }
    async create() {
        this.spinner.start();
        await Promise.all(this.doCheck());
    }
    async resolveTemplateFiles(templatePath) {
        // 读取template目录下的文件
        const fileNames = await globby(['**/*'], {
            cwd: templatePath,
            dot: true,
        });
        // 将内容解析到finalTemplate中
        fileNames.forEach((fileName) => {
            this.extendFinalTemplate(fileName, this.getFileContent(templatePath, fileName));
        });
        this.extendPkg();
    }
    exitIfError(isError, msg) {
        if (isError) {
            console.error(msg);
            this.spinner.stop(false);
            process.exit(1);
        }
    }
    addPlugin(plugin) {
        this.plugins.add(plugin);
    }
    runPlugin() {
        this.plugins.forEach((plugin) => plugin.exec());
    }
    addChecker(checker) {
        this.checkers.add(checker);
    }
    doCheck() {
        return [...this.checkers].map((checker) => checker());
    }
    clearChecker(...args) {
        if (args.length === 0) {
            this.checkers = new Set();
        }
        else {
            this.checkers = [...this.checkers].filter((checker) => ![...args].includes(checker));
        }
    }
}
module.exports = Creator;
