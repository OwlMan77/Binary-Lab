const { testSolution1, testSolution2, testSolution3, testSolution4 } = require('./tests');

/**
 * Helper functions
*/

/**
 * @param {string} str binary string e.g 0000000000000000
 * @returns {Array<string>} string byte strings
*/
const getByteArray = (str) => str.match(/.{8}/g);

/**
 * @param {string} str e.g AAA
 * @returns {boolean} true
*/
const isUpperCase = (str) => str === str.toUpperCase()

/**
 * @param {string} letter e.g A
 * @returns {number} position e.g 1 
*/
const getAlphabetPosition = (letter) => 'abcdefghijklmnopqrstuvwxyz'.split('').findIndex((l) => letter.toLocaleLowerCase() === l) + 1;

/**
 * @param {string} position e.g 1 
 * @returns {number} lowercase letter e.g a
*/
const getLetterByAlphabetPosition = (position) => 'abcdefghijklmnopqrstuvwxyz'[position - 1];

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
                value = acc + Math.pow(2, reverseIndex);
              }
        }

        reverseIndex++;
        return value;
    }, 0);
}

/**
 * @param {number} integer value e.g 80
 * @returns {string} binary string e.g 01010000
*/
const convertIntegerToBinaryString = (integer) => {
    let acc = integer;
    let binaryString = '';

    if (typeof integer !== 'number') {
        return null;
    }

    // function example I made based off the logic in this video: (https://www.youtube.com/watch?v=Ieq8AR8krrA, credit Max's Tech) 
    while (acc > 0) {
        const remainder = acc % 2;
        binaryString += remainder === 1 ? '1' : '0';

        if (Math.floor(acc / 2) === 0) {
            const currentBit = (acc / 2) % 2 === 1 ? '1' : '0';

            if (binaryString.length % 8 > 0 || (binaryString.length % 8 === 0 && currentBit === '1') ) {
              binaryString += currentBit;
            }
        }

        acc = Math.floor(acc / 2);
    }

    // handled cases when binary string is less than 8 characters
    if (binaryString === '' || binaryString.length < 8) {
        while (binaryString.length < 8) {
            binaryString += '0';
        }
    }

    return binaryString.split('').reverse().join('');
}

/**
 * @param {string} str e.g AAA accepts letters and spaces only.
 * @returns {string} e.g 010000010100000101000001
*/
const translateASCIItoBinaryString = (str) => {
    if (!/^[a-zA-Z\s]+$/.test(str)) { // ensures that strings are only letters
        return null;
    }
    const charArr = str.split('');
    const binaryArray = charArr.map((char) => {
      if (' ' === char) {
        return '00100000';
      }
      const charValue = getAlphabetPosition(char);
      const leadingMarker = isUpperCase(char) ? '010' : '011';
      return convertIntegerToBinaryString(charValue).replace(/^\d{1,3}/, leadingMarker);
    });
  
    return binaryArray.join('');
}

/**
 * @param {string} str e.g AAA accepts letters only.
 * @returns {string} e.g 010000010100000101000001
*/
const translateBinarytoASCIIString = (str) => {
    if (!/^[0-1]+$/.test(str)) { 
        return null;
    }

    const ASCIIArray = getByteArray(str).map((byte) => {
        if (byte === '00100000') {
          return ' ';
        }

        const caseMarker = byte.substring(0, 3);
        const rest = byte.substring(3, 8);
        const numberValue = getBinaryStringValue(`0000${rest}`);
    
        if (numberValue > 26 || numberValue < 1) {
            return '?';
        }
    
        const letter = getLetterByAlphabetPosition(numberValue);
        if (caseMarker === '010') {
            return letter.toUpperCase();
        }

        return letter;
    } );

    return ASCIIArray.join('');
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
 * @description Question 2 - turn an integer within the range of `0-255` and return a 8-bit binary string
 * @param {number} integer value e.g 80
 * @returns {string} binaryString e.g 01010000 
*/

const solution2 = (integer) => convertIntegerToBinaryString(integer);

/**
 * @description Question 3 - translate an ASCII text string to a binary string.
 * @param {string} str ASCII string like 'AAAA'
 * @returns {string} binaryString e.g 01010000 
*/
const solution3 = (str) => translateASCIItoBinaryString(str);

/**
 * @description Question 4 - translate a binary string to an ASCII text string .
 * @param {string} str binaryString e.g 01000001
 * @returns {string} ASCII string like 'A'
*/
const solution4 = (str) => translateBinarytoASCIIString(str);

/**
 * Tests
 * */
testSolution1(solution1);
testSolution2(solution2);
testSolution3(solution3);
testSolution4(solution4);
