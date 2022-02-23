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
 * target : Array.<number | string | object>
 * }} data
 * @param {'quick sort' | 'quick sort with string'} method
 * @description this function tests if the result of
 * the quick sort algorithm is consistent with the
 * result that was required.
 */
async function quick_sort(data, method = "quick sort") {
  let output;
  try {
    new validator(SortLib.quick_sort(data.scope, true).array)
      .is_same(data.target)
      .and()
      .bind(
        new validator(SortLib.quick_sort(data.scope, false).array).is_same(
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
export default quick_sort;
