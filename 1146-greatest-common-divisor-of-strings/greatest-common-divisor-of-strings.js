/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    var l1 = str1.length;
    var l2 = str2.length;

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b)
}

const gcdLength = gcd(l1,l2);
return str1.substring(0, gcdLength)
};