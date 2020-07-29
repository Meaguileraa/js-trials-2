"use strict";


// 1. printIndices
function printIndices(items) {
  for (const item in items)
    console.log(`${items[item]} ${item}`);
}
printIndices(['apple', 'berry', 'cherry'])


// 2. everyOtherItem
function everyOtherItem(items) {
    const result = [];

    for (const i in items) {
        if (i % 2 === 0) {
            result.push(items[i]);
        }    
    }
    return result;
}
everyOtherItem(['books', 'pencil', 'pen'])




// 3. smallestNItems
function smallestNItems(items, n) {

    const sortedItems = items.sort((a, b) => a - b);
    const sortedNItems = sortedItems.slice(0, n);

    sortedNItems.reverse();
    return sortedNItems
}
console.log(smallestNItems([1, 14, 3, 7, 0, 2], 3)); //[2, 1, 0]




