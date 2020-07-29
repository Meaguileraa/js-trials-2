"use strict";


function wordsInCommon(words1, words2) {
    words1Set = new Set(words1);
    words2Set = new Set(words2);

    result = new Set();

    for (const word of words1Set) {
        if (words2Set.has(word)) {
            result.add(word);
        }
    }

    return Array.from(result);
}

console.log(wordsInCommon(['butterfly','caterpillar'], ['butterfly', 'flower']));





function kidsGame(names) {
  // Replace this with your code
}
