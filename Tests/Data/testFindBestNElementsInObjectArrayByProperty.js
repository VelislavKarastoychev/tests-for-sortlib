'use strict';
import copy_array from '../src/copyArray.js';
import SortLib from '@euriklis/sortlib';
/**
 * 
 * @param {number} n - the length of the object array
 * @param {number} k - the count of the best elements.
 * @param {string} property
 * @returns {{scope : Array.<number>, target: Array.<number>}}
 * @description this function creates data for the testing of the
 * find_best_for_object_array_by_property.
 */
function findBestNElementsInObjectArrayByProperty(n, k, property) {
    let scope = SortLib.generate_random_array(n, null, (el) => {
        let i, obj = {},
            p;
        obj.random_integer = (el * n) >> 0;
        obj[property] = el;
        return obj;
    });
    let target = copy_array(scope).sort((a, b) => {
        return b[property] - a[property];
    }).slice(0, k);
    return { scope, target, count: k, property };
}
export default findBestNElementsInObjectArrayByProperty;