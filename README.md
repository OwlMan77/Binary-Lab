# Binary Lab

## Description 

The purpose of this repo is to brush up on my binary knowledge, which can also then be recorded for anyone else who wants to learn about the basics of binary and what can be done in JavaScript using bitshift operators. I will be structuring these as questions to myself. Then I will be adding the solutions to the answers.js

## Requirements

I will be using [Node.js](https://nodejs.org/en/) **v18.9.0**.
 Most of my solutions should work in any version of node that supports **Bitwise** operators and **bigInt** value types.

##  Section 1: Binary Basics

### How binary count and how ASCII works

(credit: [Tom Scott](https://www.youtube.com/c/TomScottGo))

<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/wCQSIub_g7M"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
> </iframe>

#### Notes

So after watching this I've been reminded of a few things about bits:
- Each bit (individual number) can be a *1* or a *0* 
- Binary is read right to left
- Every 8 bits is a byte
- To calculate the value of a byte you can use powers of two.
- Knowing this means the max value of a byte is 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255 (`11111111` in binary)

ASCII works the following way:
- In text every byte is used to represent an ASCII character
- ASCII represents letters in the following pattern CASE (`010`= **UPPER_CASE** and `011`= **lower_case**) + NUMBER_IN_ALPHABET (`1 = a`)
  - `01000001` will give `A`
  - `01100011` will give `c`
- Special characters are a little less intutive 😛

#### Exercises

Knowing this let's try a few things in **NodeJS** : 

1. Create a function that can give the integer value of an 8 bit string. Your function should take a string and return an integer value. return null if non binary string is provided.
2. Create a function that will take an integer within the range of `0-255` and return a 8-bit binary string. Return null if number is out of range. Return null if value is not a number.
3. Create a function that will translate an ASCII text string to a binary string. You don't need to handle string with special characters or numbers in those cases return null;
4. Create a function that will translate a binary string into an ASCII text string. Spaces are allowed (space is (00100000 in binary));

(Some advice make some helper functions as you build your solutions. DRY practices are important.)

##  Section 2: Bitwise operators

### Preface

For this section we will be using JavaScript integers. These are stored as 32-bit values (e.g `00000000000000000000000000000001` for `1`). only 31 bits are used for the integer value the leading bit will show if the value is a negative (`0`) or positive number (`1`).


### Operators 

#### **`|` - `OR`**

Will compare two bit values bit by bit and return 1 for each position if either are 1. Will return 0 otherwise.

**Example:**

```
const a = 1 // 00000000000000000000000000000001

const b = 8 // 00000000000000000000000000001000

console.log(1 | 8);
// will return 9 as it is 00000000000000000000000000001001
```

#### **`&` - `AND`**

Will compare two bit values bit by bit and return 1 for each position if both are 1. Will return 0 otherwise.

**Example:**

```
const a = 1 // 00000000000000000000000000000001

const b = 9 // 00000000000000000000000000001001

console.log(1 | 9);

// will return 1 as it is 00000000000000000000000000000001
```

#### ``~`` - ``NOT ``

Will invert the operand (the bit value being manipulated).

**Example:**

```
const a = 1 // 00000000000000000000000000000001

const b = 9 // 00000000000000000000000000001001

console.log(1 | 9);

// will return 1 as it is 00000000000000000000000000000001
```