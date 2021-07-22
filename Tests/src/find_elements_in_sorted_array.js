'use strict';
const error_message = require('./errorMessage');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
const validator = require('@euriklis/validator');
const unexpectedErrorMessage = require('./unexpectedErrorMessage')
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
module.exports = find_elements_in_sorted_array; 