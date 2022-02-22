"use strict";
import error_message from "./errorMessage.js";
import inverse_array from "./inverseArray.js";
import SortLib from "@euriklis/sortlib";
import success_message from "./successMessage.js";
import validator from "@euriklis/validator";
/**
 *
 * @param {{scope : Array.<number>, target : Array.<number>}} data
 * @param {'bucket sort'} method
 * @description this function tests the bucket sort algorithm.
 */
async function bucket_sort(data, method = "bucket sort") {
  let output;
  try {
    new validator(SortLib.bucket_sort(data.scope, null, true).array)
      .is_same(data.target)
      .and()
      .bind(
        new validator(
          SortLib.bucket_sort(data.scope, null, false).array
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
export default bucket_sort;
