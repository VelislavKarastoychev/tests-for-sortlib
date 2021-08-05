'use strict';
const error_message = require('./errorMessage');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
const validator = require('@euriklis/validator');
/**
 * 
 * @param {{scope: Array, target: Array, item: object}} data 
 * @param {'Find for empty object array'} method 
 */
function find_in_empty_object_array(data, method = 'Find in empty object array') {
    let output;
    try {
        console.log(data)
        new validator(SortLib.find_elements_in_sorted_object_array_by_property(data.scope, ['id'], data.item, true))
            .is_same(data.target).on(true, () => {
                output = Promise.resolve(success_message(method))
            }).on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(error_message(error))
    }
    return output;
}
module.exports = find_in_empty_object_array;