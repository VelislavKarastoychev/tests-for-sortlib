'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const find_elements_in_sorted_array = async (data, method = 'find elements in sorted array for time ') => {
    let result, output;
    try {
        result = await SortLib.find_elements_in_sorted_array_async(data.source, data.element, true);
        new validator(result.array).is_same(data.target.array)
            .And.bind(
                new validator(result.indices).is_same(data.target.indices)
            )
            .on(true, () => {
                output = Promise.resolve(success_message(method + result.time_execution));
            }).on(false, () => {
                output = Promise.reject(error_message(method));
            })
    } catch (error) {
        output = Promise.reject(error_message(method + error.message));
    }
    return output; 
}
export default find_elements_in_sorted_array;