'use strict';
import SortLib from '@euriklis/sortlib';
import copy_array from '../src/copyArray.js';
const random_array_100 = SortLib.generate_random_array(100);
const scope = copy_array(random_array_100);
const target = copy_array(random_array_100).sort((a, b) => {
    return a - b;
});
export default { scope, target };