var containsDuplicate = function (nums) {
    const mySet = new Set(nums);
    console.log(mySet);
    return mySet.size < nums.length;
}

const nums = [1, 5, 7]
const result = containsDuplicate(nums);

console.log(result);