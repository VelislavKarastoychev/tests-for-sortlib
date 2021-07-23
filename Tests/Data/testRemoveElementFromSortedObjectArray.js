'use strict';
const internal_error = require('../src/internalError');
const SortLib = require('@euriklis/sortlib');
/**
 * 
 * @param {number} array_length 
 * @param {string | Array.<string>} property 
 * @param {object} element 
 */
function removeElementFromSortedObjectArray (array_length, index, element) {
    const property = ['attributes', 'value'];
    // create an object array
    const scope = SortLib.generate_random_array(array_length, null, (el, i) => {
        let obj = {};
        obj.id = i + 1;
        obj.attributes = {};
        obj.attributes.value = el;
        return obj;
    }).sort((a, b) => {
        return a.attributes.value - b.attributes.value;
    });
    if (typeof index !== 'number') {
        internal_error('internal error in the data generator for remove element from sorted object array', 'the  index element has to be an integer');
    }
    if (typeof element === 'undefined') element = scope[index];
    const el_i = scope.findIndex((el) => el === element);
    const target = [...scope.slice(0, el_i), ...scope.slice(el_i + 1)];
    return {scope, target, element, property}
}
module.exports = removeElementFromSortedObjectArray;