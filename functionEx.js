var x=1;
a();
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}
//output: 1 10 100
//x is a global variable, but the x in the functions a and b are local variables
//functions refer to local variables in their own scope