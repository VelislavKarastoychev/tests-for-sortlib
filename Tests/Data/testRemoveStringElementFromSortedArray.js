'use strict';
import internal_error from '../src/internalError.js';
import SortLib from '@euriklis/sortlib';
/**
 * 
 * @param {number} array_length 
 * @param {number} width 
 * @param {number} index 
 * @param {string} element
 * @description this function generates a data for
 * testing of the remove element from sorted array. 
 */
function removeStringElementFromSortedArray(array_length, width, index, element) {
    const scope = SortLib.generate_random_string_array(array_length, width).sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    if (typeof element === 'undefined') element = scope[index];
    if (typeof index === 'undefined') internal_error('internal error in remove element from sorted array', 'the index parameter in the data generator for string elements is not defined');
    let i_el = scope.findIndex(el => el === element);
    const target = [...scope.slice(0, i_el), ...scope.slice(i_el + 1)];
    return { scope, element, target };
}
export default removeStringElementFromSortedArray;