getName();
console.log(x);
console.log(getName);
var x=10;
function getName(){
    console.log("Hello World!");
}
//output: Hello World! undefined [Function: getName]
//x is hoisted to the top of the code, but its value is not assigned until the line var x=10; is executed
//getName is hoisted to the top of the code, so it can be called before its declaration
//in case of arrow function, it acts like a variable
