'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'asynchronous quick sort only for array for time ';
const quick_sort = async (data, method = methodInit) => {
    let result, output;
    try {
        result = await SortLib.quick_sort_array_async(data.scope, true);
        new validator(result.array).is_same(data.target)
            .on(true, () => output = Promise.resolve(success_message(method + result.time_execution)))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) { output = Promise.reject(method + error.message) }
    return output;
}
export default quick_sort;