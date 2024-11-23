/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // // too long
    // let response = false;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i; j < nums.length; j++) {
    //         if (nums[i] < nums[j]) {
    //             for (let k = j; k < nums.length; k++) {
    //                 if (nums[j] < nums[k]) {
    //                     response = true;
    //                 }
    //             }
    //         }
    //     }
    // }
    // return response;

    let firstNum = Infinity;
    let secondNum = Infinity;

    for (let num of nums) {
        if (num <= firstNum) {
            firstNum = num
        } else if (num <= secondNum) {
            secondNum = num;
        } else return true;
    }
    return false;
};