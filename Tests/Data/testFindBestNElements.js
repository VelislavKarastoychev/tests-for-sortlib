"use strict";
const copy_array = require("../src/copyArray");
const SortLib = require("@euriklis/sortlib");
function findBestNElements(n, k) {
  let scope = SortLib.generate_random_array(n);
  let target = copy_array(scope)
    .sort((a, b) => {
      return b - a;
    })
    .slice(0, k);
  return { scope, target, count : k };
}
module.exports = findBestNElements;