// ----------- LEC-04 Basic Types in TypeScript -----------

// 👉 String Type

// Like JavaScript, TypeScript uses double quotes (") or single quotes (') to surround string literals:.

let firstName: string = 'Mohit';
console.log(firstName);

let designation = 'Full Stack Developer';   // infer as string
console.log(designation);


// 👉 Boolean Type

// The TypeScript boolean type has two values: true and false.

let isBuldOn:boolean;
isBuldOn = false;
isBuldOn = true;
console.log(isBuldOn);

const pending:boolean = true;
const notPending = !pending;
console.log(notPending);

// 👉 NOTED: DO NOT USE BOOLEAN TYPE UNLESS YOU HAVE A GOOD REASON TO DO SO.