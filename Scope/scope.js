//scope, scope chain and lexical environment
//scope: where you can access a variable or function in your code
//scope chain: how js looks for a variable in the current scope and then in the parent scope if not found
//lexical environment: local memory along with the reference to the outer lexical environment

function a(){
    var b=10;
    c();
    function c(){
        console.log(b); //10
    }
}
a();
// console.log(b); //ReferenceError: b is not defined