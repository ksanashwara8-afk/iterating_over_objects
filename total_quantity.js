const inventory = {
    pencils: 12,
    notebooks: 5,
    erasers: 8,
};
let total = 0;
for (const [key, value] of Object.entries(inventory)) {
    console.log(key, value);
    total += value;
}
console.log("total", total);
