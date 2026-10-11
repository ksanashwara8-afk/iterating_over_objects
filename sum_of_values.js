const scores = {
    Anu: 10,
    Rahul: 20,
    Meera: 30,
};
let sum = 0;
for (const key of Object.values(scores)) {
    sum += key;
}
console.log(sum);
