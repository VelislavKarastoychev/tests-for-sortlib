'use strict';
const copy_array = require('../src/copyArray');
const create_random_strings = require('../src/generateRandomStrings');
let output;
const scope = create_random_strings(100, 5);
const target = copy_array(scope).sort();
output = {scope, target};
module.exports = output;