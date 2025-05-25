//Promise.allSettled() example with multiple promises

const p1= new Promise((resolve, reject)=>{
    setTimeout(() => resolve("p1 success"), 3000);
})

const p2= new Promise((resolve, reject)=>{
    setTimeout(() => reject("p2 fail"), 1000);
})

const p3= new Promise((resolve, reject)=>{
    setTimeout(() => resolve("p3 success"), 2000);
})

Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res); // [{status: "fulfilled", value: "p1 success"}, {status: "rejected", reason: "p2 fail"}, {status: "fulfilled", value: "p3 success"}]
})
.catch(err=> console.error(err)); 