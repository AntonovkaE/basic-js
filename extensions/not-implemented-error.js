const { CONSTANTS } = require('./constants.js');

const { SPECIAL_PROP_VALUE, CORRECT_RESULT_MSG } = CONSTANTS;

class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this._specialProp = SPECIAL_PROP_VALUE;
    }
};


module.exports = {
    NotImplementedError,
};
