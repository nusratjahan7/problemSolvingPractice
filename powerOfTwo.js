var isPowerOfTwo = function (n) {
    if (n <= 0) return false;

    while (n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
};

const n = 12;
const result = isPowerOfTwo(n);

console.log(result);