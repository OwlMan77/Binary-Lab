
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

/**
 * @param {testCallback} cb
*/

const testSolution2 = (cb) => {
    console.log('\x1b[33m', 'Question 2: Create a function that will take an integer within the range of `0-255` and return a 8-bit binary string.')
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
    {
        testName: 'Should return null for invalid binary string',
        inputValue: '898090909',
        expectedResult: null,
    }
    ]

    cond(cb, tests);
}

/**
 * @param {testCallback} cb
*/
const testSolution3 = (cb) => {
    console.log('\x1b[33m', 'Question 3: Create a function that will translate an ASCII text string to a binary string')
    const tests = [{
        testName: 'Should convert AAA correctly',
        inputValue: 'AAA',
        expectedResult: '010000010100000101000001',
    },
    {
        testName: 'Should convert aaa correctly',
        inputValue: 'aaa',
        expectedResult: '011000010110000101100001',
    },
    {
        testName: 'Should convert CAKE correctly',
        inputValue: 'CAKE',
        expectedResult: '01000011010000010100101101000101',
    },
    {
        testName: 'Should convert cake correctly',
        inputValue: 'cake',
        expectedResult: '01100011011000010110101101100101',
    },
    {
        testName: 'Should return null for special character/number string',
        inputValue: '8980---{}90909',
        expectedResult: null,
    }
    ];

    cond(cb, tests);
}

/**
 * @param {testCallback} cb
*/
const testSolution4 = (cb) => {

    console.log('\x1b[33m', 'Create a function that will translate a binary string into an ASCII text string.');
    const tests = [{
        testName: 'Should convert 010000010100000101000001 correctly',
        inputValue: '010000010100000101000001',
        expectedResult: 'AAA',
    },
    {
        testName: 'Should convert 0101010001101000011001010010000001100011011000010110101101100101001000000110100101110011001000000110000100100000011011000110100101100101 correctly',
        inputValue: '0101010001101000011001010010000001100011011000010110101101100101001000000110100101110011001000000110000100100000011011000110100101100101',
        expectedResult: 'The cake is a lie',
    },
    {
        testName: 'Should return null for non binary strings',
        inputValue: '0--0-0-000-0-0-0-0-0-00-',
        expectedResult: null,
    }
    ]

    cond(cb, tests);
}

// 0101010001101000011001010010000001100011011000010110101101100101001000000110100101110011001000000110000100100000011011000110100101100101
// The cake is a lie
module.exports = { testSolution1, testSolution2, testSolution3, testSolution4 };
