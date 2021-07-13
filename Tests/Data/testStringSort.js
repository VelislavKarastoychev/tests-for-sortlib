'use strict';
const SortLib = require('@euriklis/sortlib');
const generate_random_strings = require('../src/generateRandomStrings');
const copy_array = require('../src/copyArray');
const scope = generate_random_strings(100, 5);
const target = copy_array(scope).sort();
module.exports = {scope, target};