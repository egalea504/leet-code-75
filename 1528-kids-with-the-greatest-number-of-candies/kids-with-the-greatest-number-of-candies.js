/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var finalArray = [];

    // loop through array and add extracandies
    for (n in candies) {
        var finalAmount = candies[n];
        finalAmount = candies[n] + extraCandies;
        var finalResult = true;
 // once added - compare number to all candies[i]
     // if bigger then, finalResult = true else false
        for (m in candies) {
            if (finalAmount < candies[m]) {
                finalResult = false;
                break;
            }
        }
            // push boolean to final array
        finalArray.push(finalResult);
    }
    return finalArray;
};