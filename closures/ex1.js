function x(){
    var a=7;
    function y(){
        console.log(a); //7
    }
    y();
}
x();
//closure: a function that has access to its own scope, the outer function's scope, and the global scope
//a function bundled with its lexical environment forms a closure
//gives access to outer function's scope from inner function

