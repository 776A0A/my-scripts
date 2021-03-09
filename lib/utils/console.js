"use strict";
const { log, error } = require('console');
const chalk = require('chalk');
module.exports = {
    log,
    error(msg) {
        error(chalk.cyan(`${msg}\n`));
    },
};
