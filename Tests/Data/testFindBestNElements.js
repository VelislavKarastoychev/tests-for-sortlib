"use strict";
import copy_array from "../src/copyArray.js";
import SortLib from "@euriklis/sortlib";

function findBestNElements(n, k) {
    let scope = SortLib.generate_random_array(n);
    let target = copy_array(scope)
        .sort((a, b) => {
            return b - a;
        })
        .slice(0, k);
    return { scope, target, count: k };
}
export default findBestNElements;