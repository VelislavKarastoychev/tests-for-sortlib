'use strict';
import SortLib from '@euriklis/sortlib';
/**
 * 
 * @param {number} array_length 
 * @param {number} position
 * @returns {{source : Array.<number | string>, target : Array.<number>}}
 * @description this function creates a test for the
 * find element in sorted array method of the SortLib library.
 * The function creates a random array with length which is given 
 * from the user and sorts it. Then the user has inserted an integer
 * that is the index of the element and the function has to return the
 * given element and the index of this element in an array.
 */
function findElementsInSortedArray(array_length, position) {
    let source, target, element,
        random_array = SortLib.generate_random_array(array_length);
    // sort the random array...
    random_array = SortLib.quick_sort(random_array, true).array;
    if (position >= array_length || position <= -1) {
        source = random_array;
        element = Math.random() * array_length;
        target = {
            array: [],
            indices: [-1]
        }
    } else {
        source = random_array;
        element = random_array[position];
        target = { array: [element], indices: [position] }
    }
    return { source, target, element };
}
export default findElementsInSortedArray;