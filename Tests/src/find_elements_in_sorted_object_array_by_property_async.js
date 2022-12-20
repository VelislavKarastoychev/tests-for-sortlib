'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'find elements in sorted object array by property for time ';
const find_elements_in_sorted_object_array = async (data, method = methodInit) => {
    let result, output;
    try {
        result = await SortLib.find_elements_in_sorted_object_array_by_property_async(data.scope, data.property, data.element, true);
        new validator(result.array).is_same(data.target.array)
            .And.bind(
                new validator(result.indices).is_same(data.target.indices)
            )
            .on(true, () => {
                output = Promise.resolve(success_message(method + result.time_execution + 's'));
            }).on(false, () => output = Promise.reject(error_message(method)))
    } catch (error) {
        output = Promise.reject(error_message(method + error.message));
    }
    return output;
}
export default find_elements_in_sorted_object_array;