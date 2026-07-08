
var moveZeroes = function (nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
    return nums;
}

const nums = [4, 0, 8, 3, 4, 0];
const result = moveZeroes(nums);

console.log(result);

// Output = [ 4, 8, 3, 4, 0, 0 ]