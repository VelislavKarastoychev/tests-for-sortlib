"use strict";
const error_message = require("./errorMessage");
const inverse_array = require("./inverseArray");
const SortLib = require("@euriklis/sortlib");
const success_message = require("./successMessage");
const validator = require("@euriklis/validator");
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
module.exports = selection_sort;
