function reverseString(string) {
    let newString = string.split('');
    return newString.reverse().join('')
}

module.exports = reverseString