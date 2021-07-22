'use strict';
const SortLib = require('@euriklis/sortlib');
const copy_array = require('../src/copyArray');
/**
 * 
 * @param {number} n 
 * @param {number} k 
 * @param {number} t
 * @returns {{scope : Array.<number | string>, target : Array.<number | string>, count : number}} 
 */
function findWorstNStringElements (n, k, t) {
    let scope = SortLib.generate_random_string_array(n, t);
    let target = copy_array(scope).sort().slice(0, k);
    return {scope, target, count : k};
}
module.exports = findWorstNStringElements;