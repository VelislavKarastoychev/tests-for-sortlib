'use strict';
import SortLib from '@euriklis/sortlib';
import copy_array from '../src/copyArray.js';
/**
 * 
 * @param {number} array_length
 * @param {object} element
 * @returns {{scope : Array.<number>, property : string, argument : number}} 
 */
function addElementInSortedObjectArrayByProperty(array_length, element) {
    let scope, target, copy_scope;
    scope = SortLib.generate_random_array(array_length, null, (el, i) => {
        return el = {
            attributes: { value: el },
            id: i
        }
    });
    copy_scope = copy_array(scope);
    copy_scope[array_length] = element;
    scope = SortLib.sort_object_array_by_property(scope, ['attributes', 'value'], true).array;
    target = SortLib.sort_object_array_by_property(copy_scope, ['attributes', 'value'], true).array;
    return { argument: element, scope, property: ['attributes', 'value'], target };
}
export default addElementInSortedObjectArrayByProperty;