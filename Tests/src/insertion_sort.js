"use strict";
import inverse_array from "./inverseArray.js";
import SortLib from "@euriklis/sortlib";
import success_message from "./successMessage.js";
import error_message from "./errorMessage.js";
import validator from "@euriklis/validator";
/**
 *
 * @param {{scope : Array.<number | string>, target:Array.<number | string>}} data
 * @param {'insertion sort' | 'insertion sort with string'} method
 */
async function insertion_sort(data, method) {
  let output;
  try {
    new validator(SortLib.insertion_sort(data.scope).array)
      .is_same(data.target)
      .and()
      .bind(
        new validator(
          SortLib.insertion_sort(inverse_array(data.scope), false).array
        ).is_same(inverse_array(data.target))
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
export default insertion_sort;
