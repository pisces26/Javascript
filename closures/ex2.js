function x(){
    var a=7;
    function y(){
        console.log(a); //7
    }
    a=100;
    return y;
}
var z=x();
console.log(z); // [Function: y]
z(); //7
//function returned still retains its lexical scope, so it can access the variable a from the outer function x
//closure is created when a function is returned from another function
