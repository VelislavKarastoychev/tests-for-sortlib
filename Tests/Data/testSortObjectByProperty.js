"use strict";
import SortLib from "@euriklis/sortlib";
import copy_array from "../src/copyArray.js";
let output;
const random_array = SortLib.generate_random_array(100, null, (el) => {
    return { id: el, value: Math.random() };
});
const scope = copy_array(random_array);
const target = copy_array(random_array).sort((a, b) => {
    return a.value - b.value;
});
export default { scope, target, property: 'value' };