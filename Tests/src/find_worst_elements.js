"use strict";
const error_message = require("./errorMessage");
const SortLib = require("@euriklis/sortlib");
const success_message = require("./successMessage");
const validator = require("@euriklis/validator");
/**
 *
 * @param {{scope : Array.<number | string>, target : Array.<number | string>, count : number}} data
 * @param {'find worst elements' | 'find worst elements with string parameters'} method
 * @description this function checks if the method find_worst_elements
 * works correctly for the library SortLib.
 */
async function find_worst_elements(data, method = "find worst elements") {
  let output;
  try {
    new validator(SortLib.find_worst_elements(data.scope, data.count).array)
      .is_same(data.target)
      .on(true, () => {
        output = Promise.resolve(success_message(method));
      })
      .on(false, () => {
        output = Promise.reject(error_message(method));
      });
  } catch (error) {
    output = Promise.reject(error);
  }
  return output;
}
module.exports = find_worst_elements;
