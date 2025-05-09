console.log("start");
setTimeout(function cb(){
    console.log("callback");
}, 5000);
console.log("end");


//trust issues with setTimeout
//what happens when main thread is blocked?
//million line code

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate+10000){
    endDate=new Date().getTime();
}
console.log("while loop ended");

//setTimeout is not executed until the main thread is free
//output: start end while loop ended callback