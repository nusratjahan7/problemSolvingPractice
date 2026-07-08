var singleNumber = function (nums) {
    const counts = {};
    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }
    for (let num in counts) {
        if (counts[num] === 1) {
            return Number(num);
        }
    }
}

const nums = [1, 0, 1];
const result = singleNumber(nums);

console.log(result);

// Output = 0