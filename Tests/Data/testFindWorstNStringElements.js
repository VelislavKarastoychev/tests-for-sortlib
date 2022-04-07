'use strict';
import SortLib from '@euriklis/sortlib';
import copy_array from '../src/copyArray.js';
/**
 * 
 * @param {number} n 
 * @param {number} k 
 * @param {number} t
 * @returns {{scope : Array.<number | string>, target : Array.<number | string>, count : number}} 
 */
function findWorstNStringElements(n, k, t) {
    let scope = SortLib.generate_random_string_array(n, t);
    let target = copy_array(scope).sort().slice(0, k);
    return { scope, target, count: k };
}
export default findWorstNStringElements;