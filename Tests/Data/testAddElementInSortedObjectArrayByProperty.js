'use strict';
const SortLib = require('@euriklis/sortlib');
const copy_array = require('../src/copyArray');
/**
 * 
 * @param {number} array_length
 * @param {number} element
 * @returns {{scope : Array.<number>, property : string, argument : number}} 
 */
function addElementInSortedObjectArrayByProperty(array_length, element) {
    let scope, target, copy_scope;
    scope = SortLib.generate_random_array(array_length, null, (el, i) => {
        return el = {
            value: el,
            id: i
        }
    });
    copy_scope = copy_array(scope).push({ value: element, id: 100 });
    target = SortLib.sort_object_array_by_property(copy_scope, 'value', true).array
    return { argument: element, scope, property: 'value', target }
}
module.exports = addElementInSortedObjectArrayByProperty;