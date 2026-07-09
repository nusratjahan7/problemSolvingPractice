var missingNumber = function (nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let num of nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result = missingNumber(nums);

console.log(result);

// Output = 8