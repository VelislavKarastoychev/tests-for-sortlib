"use strict";
import error_message from "./errorMessage.js";
import SortLib from "@euriklis/sortlib";
import success_message from "./successMessage.js";
import validator from "@euriklis/validator";
/**
 *
 * @param {{scope : Array.<object>, property: string, target : Array.<object>, count : number}} data
 * @param {'find worst for object array by property' | 'find worst for object array by property for string elements'} method
 * @description this function checks if the method of the SortLib
 * package find_worst_for_object_array_by_property works correctly.
 **/
async function find_worst_for_object_array_by_property(
  data,
  method = "find worst for object array by property"
) {
  let output, result;
  try {
    result = SortLib.find_worst_for_object_array_by_property(
      data.scope,
      data.property,
      data.count,
    ).array
    new validator(result)
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
export default find_worst_for_object_array_by_property;
