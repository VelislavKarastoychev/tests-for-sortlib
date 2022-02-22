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
export default cocktail_sort;
