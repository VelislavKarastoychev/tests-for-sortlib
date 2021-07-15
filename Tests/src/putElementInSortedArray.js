"use strict";
const success_message = require("./successMessage");
const error_message = require("./errorMessage");
const validator = require("@euriklis/validator");
const SortLib = require("@euriklis/sortlib");
const inverse_array = require('./inverseArray');
/**
 * @param {{
 * scope : Array.<string | number>,
 * target : Array.<number | string>,
 * argument: number | string
 * }} data
 * @param {'put number in sorted array' | 'put string in sorted array'}
 * @description this function tests if the input of
 * the SortLib library is equals with th required one.
 */
async function putElementInSortedArray(data, method = "put number in sorted array") {
  let output;
  const result = SortLib.addElementInSortedArray(data.scope, data.argument).array
  const inverse_result = SortLib.addElementInSortedArray(inverse_array(data.scope),data.argument).array;
  try {
    new validator(result)
      .is_same(data.target)
      .and()
      .bind(new validator(inverse_result).is_same(inverse_array(data.target)))
      .on(true, () => output = Promise.resolve(success_message(method)))
      .on(false, () => output = Promise.reject(error_message(method)));
  } catch (error) {
    output = Promise.reject(error);
  }
  return output;
}
module.exports = putElementInSortedArray;
