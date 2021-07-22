'use strict';
const error_message = require('./errorMessage');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
const validator = require('@euriklis/validator');
const unexpected_error_message = require('./unexpectedErrorMessage');
/**
 * 
 * @param {{scope: Array.<object>, target: {array: Array.<object>, indices: Array.<number>}, element: object}} data 
 * @param {'find elements in sorted object array by property'} method 
 */
function find_elements_in_sorted_object_array_by_property(data, method = 'find elements in sorted object array by property') {
    let output;
    try {
        const result = SortLib.find_elements_in_sorted_object_array_by_property(data.scope, ['attributes', 'value'], data.element, true);
        
        new validator(result).is_same(data.target).on(true, () => output = Promise.resolve(success_message(method)))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        unexpected_error_message(error);
    }
}
module.exports = find_elements_in_sorted_object_array_by_property;