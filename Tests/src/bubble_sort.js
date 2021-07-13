'use strict';
const SortLib = require('@euriklis/sortlib');
const error_message = require('./errorMessage');
const success_message = require('./successMessage');
const inverse_array = require('./inverseArray');
const validator = require('@euriklis/validator');
/**
 * 
 * @param {{
 * scope : Array.<number | string | object>,
 * target : Array.<number | string | object>
 * }} data
 * @param {'bubble sort' | 'bubble sort with string'} method
 * @description this function prints an error message
 * if the tests is not correct and a success message if
 * the results are consistent with the experimental.
 */
async function bubble_sort (data, method) {
    let output;
    try {
    new validator(SortLib.bubble_sort(data.scope, true).array)
    .is_same(data.target).and().bind(
        new validator(SortLib.bubble_sort(data.scope, false).array)
        .is_same(inverse_array(data.target))
    ).on(true, () => output = Promise.resolve(success_message(method)))
    .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(error);
    }
    return output;
}
module.exports = bubble_sort;