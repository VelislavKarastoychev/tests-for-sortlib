'use strict';
const findElementsInSortedObjectArrayByProperty = () => {
    const scope = [
        { name: 'v0↔v2', left: { attributes: {}, weight: 1 } },
        { name: 'v2↔v3', left: { attributes: {}, weight: 1 } }
      ],
        target = { array: [], indices: [-1] },
        element = { name: 'v0↔v3' },
        property = 'name';
    return {
        scope,
        target,
        element,
        property
    };
}
export default findElementsInSortedObjectArrayByProperty;