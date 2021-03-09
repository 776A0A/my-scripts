"use strict";
module.exports = function validateEmpty(input) {
    return !!String(input).trim();
};
