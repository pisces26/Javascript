//the ability of functions to be used as values is called first class functions
//ability to be passed as arguments and returned from other functions
//ability to be assigned to variables and properties of objects

var b=function(param1){
    console.log(param1);
}
b(function(){
    
});

var c=function(param1){
    console.log(param1);
}
function xyz(){
    
}
c(xyz);


var d= function(param1){
    return function(){

    }
}

console.log(d());