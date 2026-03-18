const arr = [1, 2, 2, 3, 4, 4]
const arr2 = []
for (let item of arr) {
    if (!arr2.includes(item)) {
        arr2.push(item)
    }
}
console.log(arr2);
