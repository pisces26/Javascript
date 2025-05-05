var a=1; // Global scope
let b=2; // Global scope
const c=3; // Global scope
{
    var a=10;
    let b=20;
    const c=30;

    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
function d() {
    const c = 1; 
    console.log(c); //1
}
d();
console.log(a); //10
console.log(b); //2
console.log(c); //3
//block var shadowing global var


//illegal shadowing
let y=1; // Global scope
var x=100;
{
    // var y=10; //error: Identifier 'a' has already been declared
    let x=200; //legal shadowing
}
