// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i); 
//         }, i* 1000);
//     }
//     console.log("hello");
// }
// x();
// Output: hello 6 6 6 6 6
//setTimeout takes function somewhere, it remembers the reference to i and not the value of i
//it takes 5 copies of same function and puts in call stack
//by the time the function is executed, the loop has already finished and i=6
//each timeout points to 6



//Solution: use let instead of var

// function y(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i); 
//         }, i* 1000);
//     }
//     console.log("hello");
// }
// y();


// Output: hello 1 2 3 4 5
// Explanation: The let keyword creates a new scope for each iteration of the loop, so each timeout function has its own copy of i.




//solution using var itself
function x(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i); 
            }, i* 1000);
        }close(i);
    }
    console.log("hello");
}
x();

// Output: hello 1 2 3 4 5
// Explanation: The close function creates a new scope for each iteration of the loop, so each timeout function has its own copy of i.
// The close function is called with the current value of i, so each timeout function has its own copy of i.