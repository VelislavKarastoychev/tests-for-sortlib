'use strict';
const bubble_sort = require('./bubble_sort');
const bucket_sort = require('./bucket_sort');
const cocktail_sort = require('./cocktail_sort');
const find_best_elements = require('./find_best_elements');
const find_best_for_object_array_by_property = require('./find_best_for_object_array_by_property');
const find_worst_elements = require('./find_worst_elements');
const find_worst_for_object_array_by_property = require('./find_worst_for_object_array_by_property');
const insertion_sort = require('./insertion_sort');
const merge_sort = require('./merge_sort');
const putElementInSortedArray = require('./putElementInSortedArray');
const quick_sort = require('./quick_sort');
const selection_sort = require('./selection_sort');
const heap_sort = require('./heap_sort');
const sort_object_array_by_property = require('./sort_object_array_by_property');
module.exports = {
    bubble_sort,
    bucket_sort,
    cocktail_sort,
    find_best_elements,
    find_best_for_object_array_by_property,
    find_worst_elements,
    find_worst_for_object_array_by_property,
    heap_sort,
    insertion_sort,
    merge_sort,
    putElementInSortedArray,
    quick_sort,
    selection_sort,
    sort_object_array_by_property,
};