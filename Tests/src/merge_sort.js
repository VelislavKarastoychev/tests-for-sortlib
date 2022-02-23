"use strict";
import error_message from "./errorMessage.js";
import inverse_array from "./inverseArray.js";
import SortLib from "@euriklis/sortlib";
import success_message from "./successMessage.js";
import validator from "@euriklis/validator";
/**
 *
 * @param {{
 * scope : Array.<number | string | object>,
 * target: Array.<number | string | object>
 * }} data
 * @param {'merge sort' | merge sort with string}
 * @description this function tests if the
 */
async function merge_sort(data, method = "merge sort") {
  let output;
  try {
    new validator(SortLib.merge_sort(data.scope, true).array)
      .is_same(data.target)
      .and()
      .bind(
        new validator(SortLib.merge_sort(data.scope, false).array).is_same(
          inverse_array(data.target)
        )
      )
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
export default  merge_sort;