// -------------- LEC-02 Types in TypeScript --------------

// 👉 What is Types ?

// A type is a label that describes the different properties and methods that a value has. A value is anything that you can assign to a variable e.g., a number, a string, an array, an object, and a function.


// 👉 Types in TypeScript:-

// ➡️ Primitive types: String, Number, Boolean, Null, Undefined, Symbol.

// ➡️ Object types: Functions, Arrays, Classes, etc.


// 👉 Type Annotations

// TypeScript uses type annotations to explicitly specify types for identifiers.

// TypeScript uses the syntax : type after an identifier

// Syntax: let variableName: type;

let count: number = 20;
count = 21;
// count = 'hello';   // compile error: 'string' is not assignable to type 'number'

let isActive: boolean = true;
let studentName: string = 'Rohan';


// 👉 Type Inference

// Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.

// let counter: number = 10;   // Explicitly specify a type

let counter = 10;   // If we initialize the counter variable with a number, TypeScript will infer the type the to be 'number'.


/*
👉 ------------------ NOTED ----------------------

In practice, you should always use the type inference as much as possible. And you use the type annotation in the following cases:

➡️ When you declare a variable and assign it a value later.
➡️ When you want a variable that can’t be inferred.
➡️When a function returns the any type and you need to clarify the value.
*/