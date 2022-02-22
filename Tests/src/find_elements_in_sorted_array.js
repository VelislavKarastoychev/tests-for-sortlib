'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
import unexpectedErrorMessage from './unexpectedErrorMessage.js';
/**
 * 
 * @param {{source, target, element}} data 
 * @param {'find elements in sorted array' | 'find string elements in sorted object array'} method 
 */
function find_elements_in_sorted_array(data, method) {
    let output;
    try {
        new validator(SortLib.find_elements_in_sorted_array(data.source, data.element, true))
            .is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method)))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) { 
        unexpectedErrorMessage(error);
    }
    return output;
}
export default find_elements_in_sorted_array; 