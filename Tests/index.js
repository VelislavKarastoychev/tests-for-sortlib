"use strict";
/**
 * This function calls all the methods of the SortLib library
 * and runs then in order to print an error or success message.
 * To add a test go to the Data file and add your data, then
 * go to the index file of the data package and refer it to the
 * export variables. Call your data in the function that follows.
 * See for more details the information in the readme file and check
 * how are done the previous tests in this repository.
 * @function run_tests
 */
import * as library_methods from './src/index.js';
import * as data from './Data/index.js';
import controlled_error_message from "./src/controlledErrorMessage.js";
import unexpected_error_message from "./src/unexpectedErrorMessage.js";
async function run_tests() {
    try {
        // test the quick sort method:
        await library_methods.quick_sort(
            data.numberSort,
            "quick sort with random number arguments"
        );
        await library_methods.quick_sort(
            data.stringSort,
            "quick sort with random string arguments"
        );
        // test merge sort:
        await library_methods.merge_sort(
            data.numberSort,
            "merge sort with random number arguments"
        );
        await library_methods.merge_sort(
            data.stringSort,
            "merge sort with random string arguments"
        );
        // test the heap sort method:
        await library_methods.heap_sort(
            data.numberSort,
            "heap sort with random number arguments"
        );
        await library_methods.heap_sort(
            data.stringSort,
            "heap sort with random string arguments"
        );
        // test the bucket sort algorithm:
        await library_methods.bucket_sort(
            data.numberSort,
            "bucket sort with random number arguments"
        );
        // this does not works:
        try {
            await library_methods.bucket_sort(
                data.stringSort,
                "bucket sort with random string arguments"
            );
        } catch (error) {
            controlled_error_message(error.message);
        }
        // test bubble sort sorting algorithm:
        await library_methods.bubble_sort(
            data.numberSort,
            "bubble sort with random number elements"
        );
        await library_methods.bubble_sort(
            data.stringSort,
            "bubble sort with random string elements"
        );
        // test the insertion sort algorithm
        await library_methods.insertion_sort(
            data.numberSort,
            "Insertion sort with random number elements"
        );
        await library_methods.insertion_sort(
            data.stringSort,
            "Insertion sort with random string elements"
        );
        // test the selection sort algorithm
        await library_methods.selection_sort(
            data.numberSort,
            "Selection sort with random number elements"
        );
        await library_methods.selection_sort(
            data.stringSort,
            "Selection sort with random string elements"
        );
        // test the cocktail sort algorithm:
        await library_methods.cocktail_sort(
            data.numberSort,
            "Cocktail sort with random number elements"
        );
        await library_methods.cocktail_sort(
            data.stringSort,
            "Cocktail sort with random string elements"
        );
        // test sort object array by property:
        await library_methods
            .sort_object_array_by_property(
                data.sortObjectByProperty,
                'sort object array with random number property values'
            );
        await library_methods.sort_object_array_by_property(
            data.sortObjectByStringProperty,
            'sort object array with random string property values'
        );
        // sort add element in sorted array:
        await library_methods.putElementInSortedArray(
            data.putElementInSortedArray,
            'add number element in sorted array'
        );
        await library_methods.putElementInSortedArray(
            data.putStringInSortedArray,
            'add string element in sorted array'
        );
        // test the add number element in a sorted object array.
        await library_methods.add_element_in_sorted_object_array_by_property(
            data.addElementInSortedObjectArrayByProperty(100, { attributes: { value: 0.767 }, id: 100 }),
            'add number element in sorted object array by property value'
        );
        await library_methods.add_element_in_sorted_object_array_by_property(
            data.addStringElementInSortedObjectArrayByProperty(100, 5, 'value'),
            'add string element in sorted object array by property value'
        );
        // test filter with validator method
        await library_methods.filter_with_validator(
            data.filterWithValidator
        );
        // test the find element in sorted array method:
        await library_methods.find_elements_in_sorted_array(
            data.findElementsInSortedArray(100, 54),
            'find elements in sorted array'
        );
        // test the find element in sorted object array by property method:
        await library_methods.find_elements_in_sorted_object_array_by_property(
            data.findElementsInSortedObjectArray(100, 55),
            'find elements in sorted object array by property'
        );
        // test find best n elements method...
        await library_methods.find_best_elements(data.findBestNElements(100, 44), 'find best number elements');
        // test find worst n number elements
        await library_methods.find_worst_elements(
            data.findWorstNElements(100, 53),
            'find worst number elements'
        );
        await library_methods.find_worst_elements(
            data.findWorstNStringElements(100, 45, 5),
            'find worst string elements'
        );
        // test find best for sorted object array by property
        await library_methods.find_best_for_object_array_by_property(
            data.findBestNElementsInObjectArrayByProperty(100, 55, 'value'),
            'find best number elements in sorted object array by property'
        );
        // test the worst for sorted object array by property
        await library_methods.find_worst_for_object_array_by_property(
            data.findWorstNElementsInObjectArrayByProperty(100, 34, 'value'),
            'find worst number elements for object array by property'
        );
        // test the find worst elements in sorted object array by a property
        await library_methods.find_worst_for_object_array_by_property(
            data.findWorstNStringElementsInObjectArray(100, 10, 5, 'text'),
            'find worst for n string elements for object array sorted by a property'
        );
        // test the remove element from sorted array
        await library_methods.remove_element_from_sorted_array(
            data.removeElementFromSortedArray(100, 52),
            'remove number element from sorted array'
        );
        await library_methods.remove_string_element_from_sorted_array(
            data.removeStringElementFromSortedArray(100, 5, 21),
            'remove string element from sorted array'
        );
        // test the remove element from sorted object array by property
        await library_methods.remove_element_from_sorted_object_array_by_property(
            data.removeElementFromSortedObjectArray(100, 90),
            'remove element from sorted object array by property'
        );
        // test if the add in sorted array methods work with empty array
        await library_methods.test_if_add_in_sorted_array_works_with_empty_array();
        // make sure that the find element in sorted object array works correctly.
        await library_methods.additional_test_for_find_in_sorted_array();
        // test if the find element in sorted object array works correctly
        // for empty arrays in which the element does not exists.
        await library_methods.find_in_empty_object_array(data.findInEmptyObjectArray);
    } catch (error) {
        unexpected_error_message(error.message);
    }
}
export default run_tests;