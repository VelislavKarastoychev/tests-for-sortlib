'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
import unexpected_error_message from './unexpectedErrorMessage.js';
/**
 * 
 * @param {{scope: Array.<object>, 
 * target: Array.<object>,
 * element: object,
 * property: string | Array.<string>
 * }} data 
 * @param {*} method 
 */
function remove_element_from_sorted_object_array_by_property (data, method) {
    let output, result;
    try {
        result = SortLib.remove_element_from_sorted_object_array_by_property(data.scope,data.property, data.element, true);
        new validator(result).is_same(data.target)
        .on(true, () => {
            output = Promise.resolve(success_message(method));
        }).on(false, () => {
            output = Promise.reject(error_message(method));
        })
    } catch (error) {
        output = Promise.reject(unexpected_error_message(error));
    }
    return output;
}
export default remove_element_from_sorted_object_array_by_property;