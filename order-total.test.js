const orderTotal = require("./order-total");
const Capitalize = require("./capitalize");
const reverseString = require("./reverseString")
const calculator = require('./calculator')
const caesarCipher = require('./caesar-cipher')
const analyzeArray = require('./analyzeArray')

test('Reverse a string', () => {
    expect(reverseString('lucas')).toBe('sacul')
})

test('sums two values', () => {
    expect(calculator.add(2,2)).toBe(4)
})

test('substracts two values', () => {
    expect(calculator.substract(3,2)).toBe(1)
})

test('divides two values', () => {
    expect(calculator.divide(4,2)).toBe(2)
})

test('multiplies two values', () => {
    expect(calculator.multiply(2,2)).toBe(4)
})

test('turns word into caesar cipher', () => {
    expect(caesarCipher('lucas')).toBe('YHPNF')
})

test('returns average, min, max and length of an array of numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})