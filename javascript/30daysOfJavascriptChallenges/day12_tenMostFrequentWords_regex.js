// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
/* Reference: Day 12, exercise 2 Of the following link https://github.com/Asabeneh/30-Days-Of-JavaScript */


// Modify THIS INPUT TEXT for whatever you want.
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;


/* Get the 10 most frequent words and its count using regular expressions*/
function tenMostFrequentWords(userMessage, resultLimit=0) {
    
    // Clean the user message a little bit.
    const punctuationRegex = /[.,?_$]/g;
    const cleanMessage = userMessage.replace(punctuationRegex, '');

    // Get all words only once (using a set) and convert that set into an array
    const inputWordsSet = new Set(cleanMessage.split(' '));
    const inputWords = Array.from(inputWordsSet);

    /*
     * Get word count of a specific word using or or or "userMessage" string variable. 
     * PD: This function could be moved outside of the main function "tenMostFrequentWords"
     **/
    function getWordCount(targetWord, originalMessage) {

        // Using "word boundary" to get only that specific word and not a similar word
        // Example: For sentence "can an can" the search for "an", only returns one match! Not three!
        const wordRegex = new RegExp('\\b' + targetWord + '\\b', 'g');

        // Array of matched words
        const matchedWords = originalMessage.match(wordRegex);
        return matchedWords.length;
    }

    const result = inputWords.map(currentWord => {
        return {
            word: currentWord,
            count: getWordCount(currentWord, userMessage)
        }
    })
    .sort((a, b) => b.count - a.count )  // Sort words by their count (from greater to lower)
    
    // Allows the user to get the first N results of the most frequent words
    return resultLimit > 0 ?
        result.slice(0, resultLimit)  // Get ONLY the 10 most frequent words (uncomment it if you want)
        : result;
}

// console.log(tenMostFrequentWords(paragraph));
//console.log(tenMostFrequentWords(paragraph, 10));

module.exports = tenMostFrequentWords;