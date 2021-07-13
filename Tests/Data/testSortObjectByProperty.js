"use strict";
const SortLib = require("@euriklis/sortlib");
const copy_array = require("../src/copyArray");
let output;
const random_array = SortLib.generate_random_array(100, null, (el) => {
  return { id: el, value: Math.random() };
});
const scope = copy_array(random_array);
const target = copy_array(random_array).sort((a, b) => {
  return a.value - b.value;
});

output = {scope, target};
module.exports = output;