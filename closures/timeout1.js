function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    }, 3000);
    console.log("hello");
}
x();
// Output: hello 1
// Explanation: The setTimeout function is asynchronous, so it will not block the execution of the code.
//js does not waitfor the setTimeout to finish before moving on to the next line of code.
//setTimeout takes the code somewhere else and after time expires, puts code in call stack