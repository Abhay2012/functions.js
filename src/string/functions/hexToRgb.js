const string_util = require('./util/isString');

/**
 * @function Converts hex color to RGB
 * @param {*} hex 
 */
const hexToRgb = (hex) => {
    string_util.isString(hex);
    hex = hex.replace(/^#/, '');
	if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    let temp = parseInt(hex, 16);
    
	return [temp >> 16, temp >> 8 & 255, temp & 255];
}

module.exports = hexToRgb