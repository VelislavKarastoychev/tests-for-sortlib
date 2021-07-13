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
const library_methods = require("./src");
const data = require("./Data");
const controlled_error_message = require("./src/controlledErrorMessage");
const unexpected_error_message = require("./src/unexpectedErrorMessage");
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
    await library_methods.bubble_sort(data.numberSort, 'bubble sort with random number elements');
    await library_methods.bubble_sort(data.stringSort, 'bubble sort with random string elements');
    // test the insertion sort algorithm
    await library_methods.insertion_sort(data.numberSort, 'Insertion sort with random number elements');
    await library_methods.insertion_sort(data.stringSort, 'Insertion sort with random string elements');
    // test the selection sort algorithm
    await library_methods.selection_sort(data.numberSort, 'Selection sort with random number elements');
    await library_methods.selection_sort(data.stringSort, 'Selection sort with random string elements');
    // test the cocktail sort algorithm:
    await library_methods.cocktail_sort(data.numberSort, 'Cocktail sort with random number elements');
    await library_methods.cocktail_sort(data.stringSort, 'Cocktail sort with random string elements');
  } catch (error) {
    unexpected_error_message(error.message);
  }
}
module.exports = run_tests;
