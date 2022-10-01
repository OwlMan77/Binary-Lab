const { testSolution1 } = require('./tests');

/**
 * Helper functions
*/

/**
 * @param {string} str binary string e.g 0000000000000000
 * @returns {Array<string>} string byte strings
*/
const getByteArray = (str) => str.match(/.{8}/g);

/**
 * @param {string} str binary string e.g 01010000
 * @returns {number} integer value e.g 80
*/
const getBinaryStringValue = (str) => {
    let reverseIndex = 0;
    return str.split('').reduceRight((acc, currentBit) => {
        let value = null;
        if (acc !== null) {
            if (currentBit === '0') {
                value = acc;
              }
              if (currentBit === '1') {
                value = acc + Math.pow(2, reverseIndex)
              }
        }

        reverseIndex++
        return value;
    }, 0);
}

/**
 *  Section 1 
 * */ 

/**
 * @description Question 1 - turn 8-bit binary string to its integer value
 * @param {string} binaryString e.g 01010000
 * @returns {number} integer value e.g 80
*/

const solution1 = (binaryString) => getBinaryStringValue(binaryString);


/**
 * Tests
 * */

testSolution1(solution1)