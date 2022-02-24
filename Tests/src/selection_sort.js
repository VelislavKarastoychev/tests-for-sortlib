"use strict";
import error_message from "./errorMessage.js";
import inverse_array from "./inverseArray.js";
import SortLib from "@euriklis/sortlib";
import success_message  from "./successMessage.js";
import validator from "@euriklis/validator";
/**
 *
 * @param {{scope : Array.<number | string>, target : Array.<number | string>}} data
 * @param {'selection sort' | 'selection sort with string arguments'} method
 */
async function selection_sort(data, method = "selection sort") {
  let output;
  try {
    new validator(SortLib.selection_sort(data.scope, true).array)
      .is_same(data.target)
      .and()
      .bind(
        new validator(SortLib.selection_sort(data.scope, false).array).is_same(
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
export default selection_sort;
