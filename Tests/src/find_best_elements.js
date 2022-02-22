"use strict";
import error_message from "./errorMessage.js";
import inverse_array from "./inverseArray.js";
import SortLib from "@euriklis/sortlib";
import success_message from "./successMessage.js";
import validator from "@euriklis/validator";
/**
 *
 * @param {{scope : Array.<number | string>, target : Array.<number | string>, count: number}} data
 * @param {'find best elements' | 'find best string elements'} method
 * @description this function tests if the find_best_elements method
 * of the SortLib library works correctly...
 */
async function find_best_elements(data, method = "find best elements") {
  let output;
  try {
    new validator(SortLib.find_best_elements(data.scope, data.count).array)
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
export default find_best_elements;
