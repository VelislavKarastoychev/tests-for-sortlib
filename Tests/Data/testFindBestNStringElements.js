'use strict';
import create_random_string from '../src/generateRandomStrings.js';
import copy_array from '../src/copyArray.js';
import invert_array from '../src/inverseArray.js';
/**
 * 
 * @param {number} n - the length of the string array. 
 * @param {number} t - the count of the characters of every string element.
 * @param {number} k - the count of the best string elements that will be return.
 * @returns {{scope:Array.<string>, target : Array.<string>}} 
 */
function findBestNStringElements(n, k, t) {
    let scope = create_random_string(n, t);
    let target = invert_array(copy_array(scope).sort()).slice(0, k);
    return { scope, target, count: k };
}
export default findBestNStringElements;