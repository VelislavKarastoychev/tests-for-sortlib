'use strict';
/**
 * 
 * @param {Array.<number | string | object>} array
 * @returns {Array.<number | string | object>}
 * @description this function makes fast deep copy
 * of an array of strings, numbers or objects. We
 * use the so called double shifting for more time
 * efficiency.  
 */
function copy_array (array) {
    const copied_array = [], n = array.length;
    let i, j;
    for (i = 0;i < n >> 2;i++) {
        j = i << 2;
        copied_array[j] = array[j];
        ++j;
        copied_array[j] = array[j];
        ++j;
        copied_array[j] = array[j];
        ++j;
        copied_array[j] = array[j];
    }
    if (n % 4 >= 1) {
        copied_array[n - 1] = array[n - 1]; 
    }
    if (n % 4 >= 2) {
        copied_array[n - 2] = array[n - 2];
    }
    if (n % 4 >= 3) {
        copied_array[n - 3] = array[n - 3];
    }
    return copied_array;
}
export default copy_array;