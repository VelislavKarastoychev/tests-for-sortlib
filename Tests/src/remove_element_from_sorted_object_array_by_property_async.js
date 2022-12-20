'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'remove element from sorted object array  by property for time ';
const remove_element_from_sorted_object_array = async (data, method = methodInit) => {
    let result, output;
    try {
        result = await SortLib.remove_element_from_sorted_object_array_by_property_async(data.scope, data.property, data.element, true);
        new validator(result.array).is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method + result.time_execution + 's')))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(error_message(method + error.message));
    }
    return output;
}
export default remove_element_from_sorted_object_array;