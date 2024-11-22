/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    
    words.reverse();

    let finalWords = []
    
    for (let word of words) {
        if (word.trim() !== "") {
            finalWords.push(word);
        }
        
    }

    return finalWords.join(" ");
};