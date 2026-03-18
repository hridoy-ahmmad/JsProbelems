const nums = [1, 2, 3, 4, 4, 1, 2, 45, 40, -8]
// const largest = Math.max(...nums)
// console.log(largest);
let max = nums[0]
// for loop
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i]
//     }
// }


// for of loop

for (let num of nums) {
    if (num > max) {
        max = num
    }
}
console.log(max);
