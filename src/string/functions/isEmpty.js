const string_util = require('./util/isString');

/**
 * @function isEmpty: String is empty or not
 * @param {*} str 
 */
const isEmpty = (str) => {
    string_util.isString(str);
    return (str === null || str === 'undefined' || str.length === 0);
}

module.exports = isEmpty
