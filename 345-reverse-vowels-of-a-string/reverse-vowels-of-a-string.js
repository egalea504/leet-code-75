/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // how many vowels to reverse
    let j = 0

    // array
    let string = s.split("");
    // console.log(string);
    let vowel = "";

    for (v in s) {
        if (s[v] === 'a' || s[v] === 'A' || s[v] == 'e' || s[v] == 'E' || s[v] == 'i' || s[v] == 'I' || s[v] == 'o' || s[v] == 'O' || s[v] == 'u' || s[v] == 'U') {
            j++;
            vowel += string[v];
        }
    }

    for (v in s) {
        if (s[v] === 'a' || s[v] === 'A' || s[v] == 'e' || s[v] == 'E' || s[v] == 'i' || s[v] == 'I' || s[v] == 'o' || s[v] == 'O' || s[v] == 'u' || s[v] == 'U') {
            string[v] = vowel[--j];
        }
    }
    return string.join("");
};