'use strict';
const error_message = require('./errorMessage');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
const validator = require('@euriklis/validator');
const unexpected_error_message = require('./unexpectedErrorMessage');
/**
 * 
 * @param {{scope: Array.<number | string>, element: number | string, target: Array.<string | number>}} data 
 * @param {'remove number element from sorted array' | 'remove string element form sorted array'} method
 * @description this function tests if the output of the SortLib remove element from sorted array is
 * the expected output for given data. 
 */
function remove_element_from_sorted_array(data, method) {
    let output, result;
    try {
        result = SortLib.remove_element_from_sorted_array(data.scope, data.element).array;
        new validator(result).is_same(data.target)
        .on(true, () => {
            output = Promise.resolve(success_message(method));
        }).on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(unexpected_error_message(error));
    }
    return output;
}
module.exports = remove_element_from_sorted_array; 