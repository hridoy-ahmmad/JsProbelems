const arr = [10, 5, 8, 20] 
const newArr = [...arr] // or use slice for if you dont want to change the main array
const arr2 = newArr.sort((a,b)=> b-a)
console.log(arr2[1]);
console.log(arr);

