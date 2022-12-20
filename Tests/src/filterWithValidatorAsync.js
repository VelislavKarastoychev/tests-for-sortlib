'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const filter_with_validator = (data, method = 'filter with validator asynchronously for time ') => {
    return SortLib.filter_with_validator_async(data.scope, (item) => {
        return new validator(item).is_object().and()
            .bind(
                new validator(item.value.attributes.value).is_equal_or_lesser_than(0.5)
            )
    })
        .then(result => {
            let output;
            new validator(result.array).is_same(data.target)
                .on(true, () => output = Promise.resolve(success_message(method + result.time_execution + 's')))
                .on(false, () => output = Promise.reject(error_message(method)));
            return output;
        }).catch(error => error_message(method + error))
}
export default filter_with_validator;