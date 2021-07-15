'use strict';
const copy_array = require('../src/copyArray');
const create_random_strings = require('../src/generateRandomStrings');
const _scope_ = create_random_strings(100, 5);
let scope = [];
for (let i = 0;i < _scope_.length;i++) {
    scope[i] = {
        id : i,
        value : _scope_[i]
    }
}
let target = copy_array(scope).sort((a, b) => {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return - 1;
    }
    return 0;
});
module.exports = {scope, target, property : 'value'};