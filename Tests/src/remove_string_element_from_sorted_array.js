'use strict';
const error_message = require('./errorMessage');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
const validator = require('@euriklis/validator');
const unexpected_error_message = require('./unexpectedErrorMessage');
function remove_string_element_from_sorted_array(data, method) {
    let output, result;
    try {
        result = SortLib.remove_element_from_sorted_array(data.scope, data.element).array;
        new validator(result).is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method)))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(unexpected_error_message(error));
    }
    return output;
}
module.exports = remove_string_element_from_sorted_array;
