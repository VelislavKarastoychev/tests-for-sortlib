'use strict';
import copy_array from '../src/copyArray.js';
import SortLib from '@euriklis/sortlib';
/**
 * 
 * @param {number} n 
 * @param {number} k 
 * @param {string} property
 * @returns {{scope : Array.<object>, target : Array.<object>, count : number}}
 * @description this function tests if the elements of the method
 * find_worst_elements of the SortLib library. 
 */
function findWorstNElementsInObjectArrayByProperty(n, k, property) {
    let scope = SortLib.generate_random_array(n, null, (el) => {
        let obj = {};
        obj.integer = (el * n) >> 0;
        obj[property] = el;
        return obj;
    });
    let target = copy_array(scope).sort((a, b) => {
        return a[property] - b[property];
    }).slice(0, k);
    return { scope, property, target, count: k };
}
export default findWorstNElementsInObjectArrayByProperty;