"use strict";
import SortLib from "@euriklis/sortlib";
import copy_array from "../src/copyArray.js";
/**
 * 
 * @param {number} n - the length of the object array. 
 * @param {number} k - the count of the worst elements which have to be returned.
 * @param {number} t - the count of the characters of every property key string of the object array.
 * @param {string} property - a key of the object elements of the array.
 * @returns {scope: Array.<object>, target:Array.<object>, count : number} 
 */
function findWorstNStringElementsInObjectArray(n, k, t, property) {
    let scope, _target, _target_, target;
    scope = SortLib.generate_random_string_array(n, t, null, (el, index) => {
        let obj = {};
        obj.id = index + 1
        obj['random integer'] = (Math.random() * n) >> 0;
        obj[property] = el;
        return obj
    });
    _target = copy_array(scope).sort((a, b) => {
        if (a[property] < b[property]) return -1;
        else if (a[property] > b[property]) return 1;
        else return 0;
    })
    target = _target.slice(0, k);
    return { scope, property, target, count: k };
}
export default findWorstNStringElementsInObjectArray;