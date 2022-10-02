
/**
 * This callback is displayed as part of the Requester class.
 * @callback testCallback
 * @param {any} testInput
 */

/**
 * @typedef {Object} TestCondition
 * @property {any} inputValue
 * @property {any} expectedResult
 * @property {string} testName
 */

/**
 * @param {testCallback} cb
 * @param {Array<TestCondition>} testInputValues 
*/
const cond = (cb, testInputValues) => testInputValues.every(({ inputValue, expectedResult, testName }) => {
  const result = cb(inputValue);
  const passed = cb(inputValue) === expectedResult;
  console.log(`${passed ? '\x1b[32m' : '\x1b[31m'}`, `${testName}: ${passed ? 'PASSED' : 'FAILED'}`, `Expected: ${expectedResult} Result: ${result}`)
  return result === expectedResult;
})

/**
 * @param {testCallback} cb
*/

const testSolution1 = (cb) => {
    console.log('\x1b[33m', 'Question 1: Create a function that can give the integer value of an 8 bit string')
    const tests = [{
        testName: 'Should convert 01010000 correctly',
        inputValue: '01010000',
        expectedResult: 80,
    },
    {
        testName: 'Should convert 00000000 correctly',
        inputValue: '00000000',
        expectedResult: 0,
    },
    {
        testName: 'Should convert 00000001 correctly',
        inputValue: '00000001',
        expectedResult: 1,
    },
    {
        testName: 'Should convert 11111111 correctly',
        inputValue: '11111111',
        expectedResult: 255,
    },
    {
        testName: 'Should return null for invalid binary string',
        inputValue: '898090909',
        expectedResult: null,
    }]

    cond(cb, tests);
}

const testSolution2 = (cb) => {
    console.log('\x1b[33m', 'Question 2: Create a function that will take an integer within the range of `0-255` and return a 8-bit binary string. Return null if number is out of range')
    const tests = [{
        testName: 'Should convert 80 correctly',
        inputValue: 80,
        expectedResult: '01010000',
    },
    {
        testName: 'Should convert 255 correctly',
        inputValue: 255,
        expectedResult: '11111111',
    },
    {
        testName: 'Should convert 0 correctly',
        inputValue: 0,
        expectedResult: '00000000',
    },
    {
        testName: 'Should convert 00000001 correctly',
        inputValue: 1,
        expectedResult: '00000001',
    },
    ]

    cond(cb, tests);
}

module.exports = { testSolution1, testSolution2 };