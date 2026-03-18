function palindrome(data) {
    const isPalindrome = data.split('').reverse().join('')

    if (data === isPalindrome) {
        return true
    } else {
        return false
    }

}
console.log(palindrome('madam'));
