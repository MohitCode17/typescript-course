// ----------- LEC-03 Basic Types in TypeScript -----------

// 👉 Number Type

// All numbers in TypeScript are either floating-point values or big integers. The floating-point numbers have the type 'number' while the big integers get the type 'bigint'.

let price: number = 100;
console.log(price);

let x: number = 12;
let y: number = 10;
console.log(`Sum is: ${x+y}`);

// 👉 Big Integers

// The big integers represent the whole numbers larger than 2^53 – 1. A Big integer literal has the n character at the end of an integer literal like this:

let big: bigint = 9007199254740991n;
console.log(big, typeof big);


// 👉 NOTED

// Avoid using the Number type as much as possible.