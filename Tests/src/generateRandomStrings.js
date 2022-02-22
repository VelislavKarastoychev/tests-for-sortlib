"use strict";
import SortLib from "@euriklis/sortlib";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
/**
 * 
 * @param {number} n - the number of the strings 
 * @param {number} k - the count of the characters in the string
 * @description this function creates random strings with equal number
 * of characters. 
 * @returns {Array.<string>}
 */
function generate_random_strings(n, k) {
  const random_array_n = SortLib.generate_random_array(n * k);
  // generate random strings with length of k symbols:
  let i, j, scope = [];
  for (i = 0; i < n; i++) {
    scope[i] = "";
    for (j = 0; j < k; j++) {
      scope[i] +=
        alphabet[(random_array_n[j * (i + 1)] * alphabet.length) >> 0];
    }
  }
  return scope
}

export default generate_random_strings;
