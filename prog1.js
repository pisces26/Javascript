//how js code is executed
//1. memory creation (variable environment)
//2. code execution (thread of execution)
//call stack maintains the order of execution of code

var n=2;
function square(num){
    var ans=num*num;
    return ans;
}
var square2=square(n);
var square3=square(3);
console.log(square2);
console.log(square3);