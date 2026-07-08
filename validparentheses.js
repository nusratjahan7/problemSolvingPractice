var isValid = function (s) {
    const stack = [];
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            let last = stack.pop();
            if (char === ')' && last !== '(') return false;
            if (char === '}' && last !== '{') return false;
            if (char === ']' && last !== '[') return false;
        }
    }
    return stack.length === 0;
}
const s = "([)]";
const result = isValid(s);

console.log(result);

// Output = false