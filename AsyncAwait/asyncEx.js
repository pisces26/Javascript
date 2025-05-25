//always returns a promise

const p= new Promise((resolve, reject)=>{
    resolve("promise resolved");
})

async function getData(){
    // return "Namaste"; //wraps the value in a promise
    return p; //returns a promise
}

const data= getData();
// console.log(data); //Promise { 'Namaste' }

data.then(res => console.log(res)); //Namaste
