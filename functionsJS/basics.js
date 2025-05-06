//function statement
function a(){
    console.log("a called");
}
a();

//function expression
var b=function(){
    console.log("b called");
}
b();

//difference between function statement and function expression
//function statement is hoisted, function expression is not hoisted
//function statement is available before it is defined, function expression is not available before it is defined

//function declaration
function c(){
    console.log("c called");
}
c();
//same as function statement


//named function expression
var d=function xyz(){
    console.log("d called");
}
d();
// xyz(); //error: xyz is not defined
//created as a local variable inside the function d
//can be accessed only inside the function d


//parameters and arguments
var e=function(param1,param2){
    console.log("e called");
}
e(1,2);//arguments