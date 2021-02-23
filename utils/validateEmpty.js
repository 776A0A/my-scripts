module.exports = function validateEmpty(input) {
    return !!String(input).trim() ? true : false
}
