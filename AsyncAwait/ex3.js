const p1 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("promise resolved");
    }, 5000)
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("promise resolved");
    }, 10000)
})

async function handlePromise(){
    console.log("hello js"); //this will execute first

    const val= await p1;
    console.log("namaste js");
    console.log(val); //promise resolved

    const val2= await p2;
    console.log("namaste js 2");
    console.log(val2); //promise resolved
}
handlePromise();
//output:
//after 5 seconds
// namaste js
// promise resolved

//using .then
// function getData(){
//     p.then(res => console.log(res)); 
//     console.log("namaste");
// }
// getData(); 
//output:
// namaste
// after 5 seconds
//promise resolved



//call stack
//console.log("hello js"); //this will execute first
//handlePromise()  //suspends as promise is not resolved yet
//handlePromise() will not block the execution of the code

//handlePromise() 
//console.log("namaste js"); //this will execute after 5 seconds
//console.log(val); //promise resolved

//handlePromise() // again suspends as promise is not resolved yet

//handlePromise()
//console.log("namaste js 2"); //this will execute after 10 seconds
//console.log(val2); //promise resolved