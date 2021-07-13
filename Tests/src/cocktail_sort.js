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
 * target : Array.<number | string | object>
 * }} data
 * @param {'cocktail sort' | 'cocktail sort with string'} method
 */
async function cocktail_sort(data, method) {
  let output;
  try {
    new validator(SortLib.cocktail_sort(data.scope, true).array)
      .is_same(data.target)
      .and()
      .bind(
        new validator(SortLib.cocktail_sort(data.scope, false).array).is_same(
          inverse_array(data.target)
        )
      )
      .on(true, () => {
        output = Promise.resolve(success_message(method));
      })
      .on(false, () => error_message(method));
  } catch (error) {
    output = Promise.reject(error);
  }
  return output;
}
module.exports = cocktail_sort;
