'use strict';
const error_message = require('./errorMessage');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
const validator = require('@euriklis/validator');
const unexpected_error_message = require('./unexpectedErrorMessage');
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
module.exports = remove_element_from_sorted_object_array_by_property;