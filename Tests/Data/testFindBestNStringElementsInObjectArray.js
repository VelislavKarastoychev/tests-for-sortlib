'use strict';
import copy_array from '../src/copyArray.js';
import create_random_strings from '../src/generateRandomStrings.js';
import inverse_array from '../src/inverseArray.js';
import SortLib from '@euriklis/sortlib';
/**
 * 
 * @param {number} n - the length of the object array. 
 * @param {number} k - the count of the best elements which have to be returned. 
 * @param {number} t - the count of each string parameter in the property key. 
 * @param {string} property - the key of the object elements of the array. 
 * @returns {{scope : Array.<object>, target : Array.<object>, count : number}}
 */
function findBestNStringElementsInObjectArray(n, k, t, property) {
    let scope = SortLib.generate_random_array(n, null, (el) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234566789';
        let obj = {};
        obj.integer = (el * n) >> 0;
        obj[property] = '';
        for (let i = 0; i < t; i++) {
            obj[property] += alphabet[(el * alphabet.length) << 0];
        }
    });
    let _target = copy_array(scope).map(el => { return el[property] }).sort();
    let target = inverse_array(_target.map(el => {
        return scope.find(elem => {
            return elem[property] === el;
        });
    })).slice(0, k);
    return { scope, target, count: k };
}
export default findBestNStringElementsInObjectArray;