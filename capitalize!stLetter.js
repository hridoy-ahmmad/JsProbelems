const words = 'hello world'

const arrWords = words.split(' ')

for (let i = 0; i < arrWords.length; i++) {
    const word = arrWords[i]
    const capWord = word[0].toLocaleUpperCase() + word.slice(1)
    console.log(capWord);

}





