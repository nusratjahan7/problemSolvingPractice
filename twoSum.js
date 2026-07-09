const twoSumSorted = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return [left, right];
        }
        else if (currentSum > target) {
            right--;
        }
        else {
            left++;
        }
    }
};

const nums = [1, 3, 4, 6, 8, 10];
const target = 10;
const result = twoSumSorted(nums, target);

console.log(result);

// Output = [ 2, 3 ]