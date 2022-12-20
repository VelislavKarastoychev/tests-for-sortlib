'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'asynchronous sort find best elements in object array by property for time ';
const find_best_for_object_array_by_property = async (data, method = methodInit) => {
    let result, output;
    try {
        result = await SortLib.find_best_for_object_array_by_property_async(data.scope, data.property, data.count, true);
        new validator(result.array).is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method + result.time_execution + 's')))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) { output = Promise.reject(error_message(method + error.message)) }
    return output;
}
export default find_best_for_object_array_by_property;