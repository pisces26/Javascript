console.log("start");
setTimeout(function cbT(){
    console.log("callback timeout");
}, 5000);
fetch("https://api.github.com/users")
.then(function cbF(){
    console.log("callback fetch");
});
console.log("end");
