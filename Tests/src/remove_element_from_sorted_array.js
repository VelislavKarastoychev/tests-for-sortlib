'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
import unexpected_error_message from './unexpectedErrorMessage.js';
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
export default remove_element_from_sorted_array; 