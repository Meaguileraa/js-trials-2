"use strict";


// 1. countWords
function countWords(phrase) {
    const wordCount = {};

    for (const word of phrase.split(' ')) {
        if (wordCount.hasOwnProperty(word)) {
            wordCount[word] += 1;
        }
        else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
console.log(countWords('Hackbright is awesome and is also great'));


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {

    const melonPrice = {
        2.50: ['Cantaloupe', 'Honeydew'], 
        2.95: ['Watermelon'], 
        3.25: ['Musk', 'Crenshaw'], 
        14.95: ['Christmas']
    };

    if (!melonPrice[price]) {
        return;
    }

    return melonPrice[price].sort();
};

console.log(getMelonsAtPrice(2.50));