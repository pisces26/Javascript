//Promise.race() example with multiple promises

const p1= new Promise((resolve, reject)=>{
    setTimeout(() => resolve("p1 success"), 3000);
})

const p2= new Promise((resolve, reject)=>{
    setTimeout(() => reject("p2 fail"), 1000);
})

const p3= new Promise((resolve, reject)=>{
    setTimeout(() => resolve("p3 success"), 2000);
})

Promise.race([p1, p2, p3]).then(res => {
    console.log(res); 
})
.catch(err=> console.error(err)); // "p2 fail"