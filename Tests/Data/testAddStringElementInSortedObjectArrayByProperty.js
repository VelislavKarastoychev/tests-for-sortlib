'use strict';
const SortLib = require('@euriklis/sortlib');
const copy_array = require('../src/copyArray');
const inverse_array = require('../src/inverseArray');
function addStringElementInSortedObjectArrayByProperty(array_length, string_width, argument) {
    const scope = SortLib.generate_random_string_array(array_length, string_width, (el, i) => {
        let rand_str_obj = {};
        rand_str_obj.id = i + 1;
        rand_str_obj[argument] = el;
        return rand_str_obj;
    });
    const target = copy_array(scope).sort((a, b) => {
        if (a[argument] > b[argument]) return -1;
        if (a[argument] < b[argument]) return 1;
        return 0;
    });
    return { scope, target, argument }
}
module.exports = addStringElementInSortedObjectArrayByProperty;
