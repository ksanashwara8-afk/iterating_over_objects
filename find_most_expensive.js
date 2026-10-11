const prices = {
    apple: 20,
    banana: 10,
    orange: 15,
    mango: 40,
};
maxKey = "";
maxValue = 0;

for (const [key, value] of Object.entries(prices)) {
    if (value > maxValue) {
        maxKey = key;
        maxValue = value;
    }
}
console.log(maxKey, maxValue);
