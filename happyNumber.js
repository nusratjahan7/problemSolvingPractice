var isHappy = function (n) {
    const visited = new Set();

    while (n !== 1 && !visited.has(n)) {
        visited.add(n);
        let sum = 0;
        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n === 1;
}

const n = 2;
const result = isHappy(n);

console.log(result);

// Output = false