"use strict";
const SortLib = require("@euriklis/sortlib");
const copy_array = require("../src/copyArray");
/**
 * 
 * @param {number} n - the length of the object array. 
 * @param {number} k - the count of the worst elements which have to be returned.
 * @param {number} t - the count of the characters of every property key string of the object array.
 * @param {string} property - a key of the object elements of the array.
 * @returns {scope: Array.<object>, target:Array.<object>, count : number} 
 */
function findWorstNStringElementsInObjectArray(n, k, t, property) {
  let scope, _target, _target_, target;
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234566789";
  scope = SortLib.generate_random_array(n, null, (el) => {
    let obj = {};
    obj.integer = (el * alphabet.length) << 0;
    obj[property] = "";
    for (let i = 0; i < t; i++) {
      obj[property] += alphabet[(el * alphabet.length) << 0];
    }
    return obj;
  });
  _target = copy_array(scope).map(el => {return el = scope[property]}).sort();
  target = scope.map(el => {
      return scope.find(scope_elem => {
          scope_elem[property] === el;
      });
  }).slice(0, k);
  return {scope, target, count : k};
}
module.exports = findWorstNStringElementsInObjectArray;
