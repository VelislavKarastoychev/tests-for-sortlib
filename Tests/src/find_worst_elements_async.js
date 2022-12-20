'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'asynchronous find worst elements for time ';
const find_worst_elements = async (data, method = methodInit) => {
    let result, output;
    try {
        result = await SortLib.find_worst_elements_async(data.scope, data.count);
        new validator(result.array).is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method + result.time_execution + 's')))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) { output = Promise.reject(error_message(method + error.message)) }
    return output;
}
export default find_worst_elements;