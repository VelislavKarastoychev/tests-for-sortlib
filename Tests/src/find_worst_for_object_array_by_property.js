"use strict";
const error_message = require("./errorMessage");
const SortLib = require("@euriklis/sortlib");
const success_message = require("./successMessage");
const validator = require("@euriklis/validator");
/**
 *
 * @param {{scope : Array.<object>, target : Array.<object>, count : number}} data
 * @param {'find worst for object array by property' | 'find worst for object array by property for string elements'} method
 * @description this function checks if the method of the SortLib
 * package find_worst_for_object_array_by_property works correctly.
 **/
async function find_worst_for_object_array_by_property(
  data,
  method = "find worst for object array by property"
) {
  let output;
  try {
    new validator(
      SortLib.find_worst_for_object_array_by_property(
        data.scope,
        data.count
      ).array
    )
      .is_same(data.target)
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
module.exports = find_worst_for_object_array_by_property;
