'use strict';
import error_message from './errorMessage.js';
import validator from '@euriklis/validator';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
async function test_if_add_in_sorted_array_works_with_empty_array(method = 'test add in sorted array for empty arrays') {
    let output;
    try {
        new validator(SortLib.add_element_in_sorted_array([], 3.14, ).array)
            .is_same([3.14]).and().bind(
                new validator(SortLib.add_element_in_sorted_object_array_by_property([], ['attributes', 'value'], { attributes: { value: 3.14 } }))
                .is_same([{ attributes: { value: 3.14 } }])
            ).on(true, () => output = Promise.resolve(success_message(method)))
            .on(false, () => output = Promise.reject(error_message(method)));
    } catch (error) {
        output = Promise.reject(error);
    }
    return output;
}
export default test_if_add_in_sorted_array_works_with_empty_array;