'use strict';
const SortLib = require('@euriklis/sortlib');
const copy_array = require('../src/copyArray');
const random_array_100 = SortLib.generate_random_array(100);
const scope = copy_array(random_array_100);
const target = copy_array(random_array_100).sort((a, b) => {
    return a - b;
});
module.exports = {scope, target};