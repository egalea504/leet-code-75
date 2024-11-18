/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    numberOfSpots = 0
    // loop through
 for (i in flowerbed) {
    let before = Number(i) - 1;
    let after = Number(i) + 1;
    if (flowerbed[i] === 0 && flowerbed[before] !== 1 && flowerbed[after] !== 1) {
        flowerbed[i] = 1;
        numberOfSpots ++;
    }
 }
 if (numberOfSpots >= n) {
    return true;
 }
 return false;
};