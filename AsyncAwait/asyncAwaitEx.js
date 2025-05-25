//async and await combo is used to handle promises in a more readable way
const p= new Promise((resolve, reject)=>{
    resolve("promise resolved");
})

async function handlePromise(){
    const val= await p; //instead of .then, we use await to wait for the promise to resolve
    console.log(val); //promise resolved
}

handlePromise(); //call the async function to execute the code