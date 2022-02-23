"use strict";
/**
 *
 * @param {{Array.<number | string | object>}} array
 * @returns {Array.<number | string | object>}
 * @description this function makes inverse copy of
 * the elements of an arbitrary array.
 */
function inverse_array(array) {
  const n = array.length;  
  let copied_array = [], i, j;
  for (i = 0;i < n >> 2;i++) {
    j = i << 2;
    copied_array[j] = array[n - 1 - j];
    copied_array[j + 1] = array[n - 2 - j];
    copied_array[j + 2] = array[n - 3 - j];
    copied_array[j + 3] = array[n - 4 - j];
  }
  if (n %  4 >= 1) copied_array[n - 1] = array[0];
  if (n % 4 >= 2) copied_array[n - 2] = array[1];
  if (n % 4 >= 3) copied_array[n - 3] = array[2];
  return copied_array;
}
export default inverse_array;
