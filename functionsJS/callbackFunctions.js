//function that we pass to another function
//gives access to asynchornous environment

setTimeout(function(){
    console.log("timer...");
},5000);

function x(y){
    console.log("x function called");
    y();
}
 
x(function y(){
    console.log("y function called");
})