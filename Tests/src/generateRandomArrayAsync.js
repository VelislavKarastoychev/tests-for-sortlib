'use strict';
import error_message from './errorMessage.js';
import SortLib from '@euriklis/sortlib';
import success_message from './successMessage.js';
import validator from '@euriklis/validator';
const methodInit = 'generate random array asynchronously ';
const generate_random_array = async (elements, method = methodInit) => {
    const array1 = await SortLib.generate_random_array(elements);
    const array2 = SortLib.generate_random_array(elements);
    let out;
    new validator(array1).is_same(array2)
        .on(true, () => out = Promise.resolve(success_message(method)))
        .on(false, () => out = Promise.reject(error_message(method)))
    return out;
}
export default generate_random_array;