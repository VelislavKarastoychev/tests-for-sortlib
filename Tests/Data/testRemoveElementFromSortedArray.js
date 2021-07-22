'use strict';
const copy_array = require('../src/copyArray');
const InternalError = require('../src/internalError');
const SortLib = require('@euriklis/sortlib');
function removeElementFromSortedArray(n, index, element) {
    const scope = SortLib.generate_random_array(n);
    if (typeof index !== 'number') throw InternalError(
        'test module for the remove element from sorted array method',
        'The argument index is not integer.'
    );
    if (typeof element === 'undefined') element = scope[index];
    let i_el = scope.findIndex(element);
    const target = [...copy_array(scope).slice(0, i_el), ...copy_array(scope).slice(i_el + 1)];
    return {scope, target, element}
}
module.exports = removeElementFromSortedArray;