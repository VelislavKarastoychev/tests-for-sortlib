'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'asynchronous generate random string array ';
const generate_random_string_array = async (elements, word_size, method = methodInit) => {
    let output;
    const array1 = await SortLib.generate_random_string_array_async(elements, word_size);
    const array2 = SortLib.generate_random_string_array(elements, word_size);
    new validator(array1).is_same(array2).And.isStringArray
        .on(true, () => output = Promise.resolve(success_message(method)))
        .on(false, () => output = Promise.reject(error_message(method)));
    return output;
}
export default generate_random_string_array;