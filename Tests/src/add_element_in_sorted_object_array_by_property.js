'use strict';
import data from '../Data/index.js';
import error_message from './errorMessage.js';
import inverse_array from './inverseArray.js';
import SortLib from "@euriklis/sortlib.js";
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
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
export default add_element_in_sorted_object_array_by_property;