'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
/**
 * 
 * @param {{scope: Array, target: Array, item: object}} data 
 * @param {'Find for empty object array'} method 
 */
function find_in_empty_object_array(data, method = 'Find in empty object array') {
    let output;
    try {
        new validator(SortLib.find_elements_in_sorted_object_array_by_property(data.scope, ['id'], data.item, true))
            .is_same(data.target).on(true, () => {
                output = Promise.resolve(success_message(method))
            }).on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(error_message(error))
    }
    return output;
}
export default find_in_empty_object_array;