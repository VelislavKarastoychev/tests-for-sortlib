'use strict';
import SortLib from '@euriklis/sortlib';
import copy_array from '../src/copyArray.js';

function addStringElementInSortedObjectArrayByProperty(array_length, string_width) {
    let scope = SortLib.generate_random_string_array(array_length, string_width, null, (el, i) => {
        let rand_str_obj = {};
        rand_str_obj.id = i + 1;
        rand_str_obj.attributes = {};
        rand_str_obj.attributes.value = el;
        return rand_str_obj;
    });
    scope = SortLib.sort_object_array_by_property(scope, ['attributes', 'value'], true).array;
    const element = { id: 101, attributes: { value: 'ew31r' } };
    let target = copy_array(scope);
    target[array_length] = element;
    target = SortLib.sort_object_array_by_property(target, ['attributes', 'value'], true).array;
    return { scope, target, property: ['attributes', 'value'], argument: element }
}
export default addStringElementInSortedObjectArrayByProperty;