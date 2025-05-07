console.log("start");
setTimeout(function cb(){
    console.log("callback");
}, 5000);
console.log("end");
// The output of this code will be:
// start
// end
// callback
