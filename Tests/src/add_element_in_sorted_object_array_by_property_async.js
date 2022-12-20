'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const add_element_in_sorted_object_array_by_property = (data, method = "add element in sorted object array by property for time ") => {
    return SortLib.add_element_in_sorted_object_array_by_property_async(data.scope, data.property, data.argument, true)
        .then(result => {
            let output;
            new validator(result.array).is_same(data.target)
                .on(true, () => output = Promise.resolve(success_message(method + result.time_execution + 's')))
                .on(false, () => output = Promise.reject(error_message(method)));
            return output;
        }).catch(error => error_message(method + error));
}
export default add_element_in_sorted_object_array_by_property;