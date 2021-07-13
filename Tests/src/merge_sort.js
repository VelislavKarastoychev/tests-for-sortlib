"use strict";
const error_message = require("./errorMessage");
const inverse_array = require("./inverseArray");
const SortLib = require("@euriklis/sortlib");
const success_message = require("./successMessage");
const validator = require("@euriklis/validator");
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
module.exports = merge_sort;
