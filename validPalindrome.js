var isPalindrome = function (s) {

    let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
const s = "Was it a car or a cat I saw?"
const result = isPalindrome(s);

console.log(result);