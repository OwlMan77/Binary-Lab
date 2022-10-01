
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
  console.log(`${testName}: ${passed ? 'PASSED' : 'FAILED'}`, `Expected: ${expectedResult} Result: ${result}`)
  return result === expectedResult;
})

/**
 * @param {testCallback} cb
*/

const testSolution1 = (cb) => {
    console.log('Question 1: Create a function that can give the integer value of an 8 bit string')
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

module.exports = { testSolution1 };