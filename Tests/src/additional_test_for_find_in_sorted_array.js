'use strict';
import error_message from './errorMessage.js';
import copy_array  from './copyArray.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
/**
 * 
 * @param {'additional test for find in sorted arrays'} method
 * @description this is an additional method for testing of the find in sorted array.
 * It is well known that this method works when we will put the element with all the
 * properties of the array, but if we insert only the interested properties then we do
 * not know if the method will work correctly. So we want to test this method for incomplete
 * object structure of the element of an object array of elements.
 */
async function additional_test_for_find_in_sorted_arrays(method = 'additional test for find in sorted object arrays') {
    let output;
    // create an object array.
    const scope = SortLib.generate_random_array(100, null, (el, i) => {
        let usernames_list = ['Pentium', 'IBM', 'Microsoft', 'Mac'];
        return {
            _id: i + 1,
            process_power: el,
            username: usernames_list[(Math.random() * 4) >> 0],
            architecture: {
                cores: (Math.random() * 100) >> 0,
                value: Math.random()
            }
        };
    }).sort((a, b) => {
        return a.architecture.cores - b.architecture.cores;
    });
    const target = copy_array(scope).filter(item => {
        return item.architecture.cores === 40;
    });
    try {
        new validator(SortLib.find_elements_in_sorted_object_array_by_property(scope, ['architecture', 'cores'], { architecture: { cores: 40 } }).array)
            .is_same(target).on(true, () => {
                output = Promise.resolve(success_message(method));
            }).on(false, () => output = Promise.reject(method));
    } catch (error) {
        output = Promise.reject(error);
    }
    return output;
}
export default additional_test_for_find_in_sorted_arrays;