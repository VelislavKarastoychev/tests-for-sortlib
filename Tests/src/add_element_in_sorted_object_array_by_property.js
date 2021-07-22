'use strict';
const data = require('../Data');
const error_message = require('./errorMessage');
const inverse_array = require('./inverseArray');
const SortLib = require("@euriklis/sortlib");
const success_message = require('./successMessage');
const validator = require('@euriklis/validator');
/**
 * 
 * @param {{
 * argument : string | number,
 * scope : Array.<object>, 
 * property : Array.<string> | string, 
 * target : Array.<object>
 * }} data 
 * @param {'add number element in sorted object array by property' | 'add string element in sorted object array by property'} method
 * @description this utility function tests if the static method of the SortLib
 * package add_element_in_sorted_object_array() works correctly. We use the corresponded
 * data in the tests.
 */
async function add_element_in_sorted_object_array_by_property(data, method = 'add element in sorted object array by property') {
    let output;
    try {
        new validator(SortLib.add_element_in_sorted_object_array_by_property(data.scope, data.property, data.argument))
            .is_same(data.target)
            .and().bind(
                new validator(SortLib.add_element_in_sorted_object_array_by_property(inverse_array(data.scope), data.property, data.argument, false))
                    .is_same(inverse_array(data.target))
            ).on(true, () => output = Promise.resolve(success_message(method)))
            .on(false, () => {
                output = Promise.reject(error_message(method))
            });
    } catch (error) {
        output = Promise.reject(error);
    }
    return output;
}
module.exports = add_element_in_sorted_object_array_by_property;