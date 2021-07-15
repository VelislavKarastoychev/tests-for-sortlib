'use strict'
const SortLib = require('@euriklis/sortlib');
const validator = require('@euriklis/validator');
const inverse_array = require('./inverseArray');
const error_message = require('./errorMessage');
const success_message = require('./successMessage');
/**
 * 
 * @param {{scope : Array.<object>, target : Array.<object>, property : string}} data 
 * @param {'sort object array by number property value' | 'sort object array by string property value'} method 
 */
async function sort_object_array_by_property(data, method = 'sort object array by number property value') {
    let output;
    try {
        new validator(SortLib.sort_object_array_by_property(data.scope, data.property, true, 'quick sort').array)
            .is_same(data.target)
            .and().bind(
                new validator(SortLib.sort_object_array_by_property(data.scope, data.property, false, 'quick sort').array)
                    .is_same(inverse_array(data.target))
            ).and().bind(
                new validator(SortLib.sort_object_array_by_property(data.scope, data.property, true, 'merge sort').array)
                    .is_same(data.target)
            ).and().bind(
                new validator(SortLib.sort_object_array_by_property(data.scope, data.property, false, 'merge sort').array)
                    .is_same(inverse_array(data.target))
            ).and().bind(
                new validator(SortLib.sort_object_array_by_property(data.scope, data.property, true, 'heap sort').array)
                    .is_same(data.target)
            ).and().bind(
                new validator(SortLib.sort_object_array_by_property(data.scope, data.property, false, 'heap sort').array)
                    .is_same(inverse_array(data.target))
            )
            // this is commented because of the string array testing
            // if you test only number properties, this will works as well
            // as the other sorting methods. 
            /*.and().bind(
                new validator(SortLib.sort_object_array_by_property(data.scope, data.property, true, 'bucket sort').array)
                    .is_same(data.target)
            ).and().bind(
                new validator(SortLib.sort_object_array_by_property(data.scope, data.property, false, 'bucket sort').array)
                    .is_same(inverse_array(data.target))
            )*/
            .on(true, () => {
                output = Promise.resolve(success_message(method));
            }).on(false, () => {
                output = Promise.reject(error_message(method));
            })
    } catch (error) {
        output = Promise.reject(error);
    }
    return output;
}
module.exports = sort_object_array_by_property;