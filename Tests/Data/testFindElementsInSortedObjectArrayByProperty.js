'use strict';
const SortLib = require('@euriklis/sortlib');
/**
 * 
 * @param {number} len 
 * @param {number} position
 * @returns {{scope: Array.<object>, target: {array:Array.<object>, indices: Array.<number>}, element: object}} 
 */
function findElementsInSortedObjectArrayByProperty(len, position) {
    let random_array = SortLib.generate_random_array(len, null, (el, i) => {
        let output = {};
        output.id = i + 1;
        output.attributes = {};
        output.attributes.value = el;
        return output;
    });
    let scope = SortLib.sort_object_array_by_property(random_array, ['attributes', 'value'], true).array;
    if (position >= len || position <= -1) return {
        scope,
        target: { array: [], indices: [-1] },
        element: (Math.random() * len) >> 0
    };
    else return {
        scope,
        target: { array: [scope[position]], indices: [position] },
        element: scope[position]
    };
}
module.exports = findElementsInSortedObjectArrayByProperty;