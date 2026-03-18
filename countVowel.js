const str = 'hello javaScript'

let count = 0
let vowels = 'aeiou'

// for (let char of str) {
//     if (vowels.includes(char)) {
//         count++
//         console.log(char);
//     }
// }

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    // if(vowels.includes(char)){
    //     count++
    // }
    if (char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u') {
        count++
    }
}


console.log(count);


