'use strict';
const copy_array = require('../src/copyArray');
const  SortLib = require('@euriklis/sortlib');
const scope = SortLib.generate_random_array(100, null, (el, index) => {
    return {
        _id: index + 1,
        attributes: {value: el},
        type: 'random numbers object'
    };
});

// filter all the elements that have
// the values lesser than or equals to 0.5
const target = copy_array(scope).filter(item =>  {
    return item.attributes.value <= 0.5;
});
module.exports = {scope, target};