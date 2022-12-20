'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
import unexpected_error_message from './unexpectedErrorMessage.js';
/**
 * 
 * @param {{scope: Array.<object>, target: {array: Array.<object>, indices: Array.<number>}, element: object}} data 
 * @param {'find elements in sorted object array by property'} method 
 */
function find_elements_in_sorted_object_array_by_property(data, method = 'find elements in sorted object array by property') {
    let output;
    try {
        const result = SortLib.find_elements_in_sorted_object_array_by_property(data.scope, data.property, data.element, true);
        
        new validator(result).is_same(data.target).on(true, () => output = Promise.resolve(success_message(method)))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        unexpected_error_message(error);
    }
}
export default find_elements_in_sorted_object_array_by_property;