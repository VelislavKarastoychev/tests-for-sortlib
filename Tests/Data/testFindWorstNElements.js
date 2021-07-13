"use strict";
const copy_array = require("../src/copyArray");
const SortLib = require("@euriklis/sortlib");
/**
 * 
 * @param {number} n - the length of the array 
 * @param {number} k - the number of the worst elements
 * @returns {scope : Array.<number>, target : Array.<number>, count : k}
 * @description this function generates a static random set
 * that is correct output of the method findWorstElements of the SortLib. 
 **/
function findWorstNElements(n, k) {
  let scope = SortLib.generate_random_array(n);
  let target = copy_array(scope)
    .sort((a, b) => {
      return a - b;
    })
    .slice(0, k);
    return {scope, target, count : k}
}
module.exports = findWorstNElements;