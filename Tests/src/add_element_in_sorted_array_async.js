'use strict';
import error_message from './errorMessage.js';
import validator from "@euriklis/validator";
import SortLib from "@euriklis/sortlib";
import success_message from './successMessage.js';
const testAddElementInSortedArrayAsync = (data, method = "add element in sorted array asynchronously for time ") => {
    return SortLib.add_element_in_sorted_array_async(data.scope, data.argument, true)
        .then(result => {
            let output;
            new validator(result.array).is_same(data.target)
                .on(true, () => {
                    output = Promise.resolve(success_message(method + result.time_execution + 's'));
                }).on(false, () => {
                    output = Promise.reject(error_message(method))
                })
            return output;
        }).catch(error => error_message(method + " " + error));
}
export default testAddElementInSortedArrayAsync;