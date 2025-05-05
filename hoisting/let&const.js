
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); //undefined
let a=10;
console.log(a);
// let a=20; //SyntaxError: Identifier 'a' has already been declared

var b=100;

const c=200;
// const d;
// d=300; //SyntaxError: Missing initializer in const declaration


//let and const are hoisted but are in temporal dead zone (TDZ) until they are declared
//TDZ is the time between the start of the block and the declaration of the variable
//in TDZ, the variable cannot be accessed, and trying to do so will result in a ReferenceError