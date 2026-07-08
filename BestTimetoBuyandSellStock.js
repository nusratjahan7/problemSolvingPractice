

var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}
const prices = [7, 6, 4, 3, 1];
const result = maxProfit(prices);

console.log("profit", result);

// Output: 0