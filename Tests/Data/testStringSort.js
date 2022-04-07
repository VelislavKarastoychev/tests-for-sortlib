'use strict';
import SortLib from '@euriklis/sortlib';
import generate_random_strings from '../src/generateRandomStrings.js';
import copy_array from '../src/copyArray.js';
const scope = generate_random_strings(100, 5);
const target = copy_array(scope).sort();
export default { scope, target };