"use strict";
import error_message from "./errorMessage.js";
import SortLib from "@euriklis/sortlib";
import success_message from "./successMessage.js";
import validator from "@euriklis/validator";
/**
 *
 * @param {{scope : Array.<object>, target : Array.<object>, count : number}} data
 * @param {'find best for object array by property for number arguments' | 'find best for object array by property with string elements'} method
 * @description this function checks if the find_best_for_object_array_by_property
 * works correctly for the SortLib package.
 */
async function find_best_for_object_array_by_property(
  data,
  method = "find best for object array by property for number arguments"
) {
  let output;
  try {
    new validator(
      SortLib.find_best_for_object_array_by_property(
        data.scope,
        data.property,
        data.count,
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
export default find_best_for_object_array_by_property;
