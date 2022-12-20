'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'bubble sort asynchronous for time ';
const bubble_sort = async (data, method = methodInit) => {
    let result, output;
    try {
        result = await SortLib.bubble_sort_async(data.scope, true);
        new validator(result.array).is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method + result.time_execution + 's')))
            .on(false, () => {
                output = Promise.reject(error_message(method))
            });
    } catch (error) { output = Promise.reject(error_message(method + error)) }
    return output;
}
export default bubble_sort;