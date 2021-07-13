"use strict";
const error_message = require("./errorMessage");
const inverse_array = require("./inverseArray");
const SortLib = require("@euriklis/sortlib");
const success_message = require("./successMessage");
const validator = require("@euriklis/validator");
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
module.exports = bucket_sort;
