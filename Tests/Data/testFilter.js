'use strict';
import SortLib from '@euriklis/sortlib';
const filter = (elements) => {
    const callback = n => (n > 0.2) && (n <= 0.64);
    const source = SortLib.generate_random_array(elements);
    const target = [...source].filter(callback);
    return {
        callback,
        source,
        target
    }
}
export default filter;