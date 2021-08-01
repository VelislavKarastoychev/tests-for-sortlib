'use strict';
const error_message = require('./errorMessage');
const validator = require('@euriklis/validator');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
async function test_if_add_in_sorted_array_works_with_empty_array (method = 'test add in sorted array for empty arrays') {
    let output;
    try {
        new validator(SortLib.add_element_in_sorted_array([], 3.14, ).array)
        .is_same([3.14]).and().bind(
            new validator(SortLib.add_element_in_sorted_object_array_by_property([], ['attributes', 'value'], {attributes: {value: 3.14}}))
            .is_same([{attributes: {value: 3.14}}])
        ).on(true, () => output = Promise.resolve(success_message(method)))
        .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(error);
    }
    return output;
}
module.exports = test_if_add_in_sorted_array_works_with_empty_array;