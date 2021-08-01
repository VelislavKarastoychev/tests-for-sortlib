'use strict';
const error_message = require('./errorMessage');
const validator = require('@euriklis/validator');
const SortLib = require('@euriklis/sortlib');
const success_message = require('./successMessage');
/**
 * 
 * @param {{scope: Array.<{}>, target: Array.<{}>}} data 
 * @param {'filter with validator'} method
 * @description this function is an utility application
 * which tests if the output of the data for testing of the
 * filter with validator method corresponded to the desired
 * output of the underlined SortLib method. Note that this 
 * function is tester for the condition of the fact
 * the item.attributes.value element to be lesser than or
 * equals to 0.5 and nothing else. 
 */
async function filter_with_validator(data, method = 'filter with validator') {
    let output;
    try {
        new validator(SortLib.filter_with_validator(data.scope, (item) => {
            return new validator(item).is_object().and()
                .bind(
                    new validator(item.value.attributes.value).is_equal_or_lesser_than(0.5)
                );
        }).array).is_same(data.target)
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
module.exports = filter_with_validator;