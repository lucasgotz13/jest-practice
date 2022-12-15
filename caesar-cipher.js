function caesarCipher(string) {
    let upperCaseString = string.toUpperCase()
    const normalAlphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    const caesarAlphabet = [
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
    ];
    let newString = []
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < normalAlphabet.length; j++) {
            if (upperCaseString[i] === caesarAlphabet[j]) {
                newString.push(normalAlphabet[j])
            }
        }
    }

    return newString.join('');
}

caesarCipher("SERR CVMMN")

module.exports = caesarCipher;
