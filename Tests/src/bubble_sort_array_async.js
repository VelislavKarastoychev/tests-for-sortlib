'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'asynchronous bubble sort only for the array for time ';
const bubble_sort = async (data, method = methodInit) => {
    let result, output;
    try {
        result = await SortLib.bubble_sort_array_async(data.scope, true);
        new validator(result.array).is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method + result.time_execution + 's')))
            .on(false, () => output = Promise.reject(method));
    } catch (error) { output = Promise.reject(method + error.message)}
    return output;
}

export default bubble_sort;