'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const filter_async = (data, method = 'filter asynchronously for time ') => {
    return SortLib.filter_async(data.source, data.callback)
        .then(result => {
            let output;
            new validator(result.array).is_same(data.target)
                .on(true, () => {
                    output = Promise.resolve(success_message(method + result.time_execution + 's'));
                }).on(false, () => {
                    output = Promise.reject(error_message(method));
                })
        }).catch(error => error_message(method + error.message));
}
export default filter_async; 