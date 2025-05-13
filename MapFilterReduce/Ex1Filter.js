//filter is used to filter out the elements of an array based on a condition
const arr=[2,5,6,3,8];

//filter odd values
// function isOdd(x){
//     return x%2;
// }

// const output= arr.filter(isOdd);

const output= arr.filter(function isOdd(x){
    return x%2;
});

//arrow function
// const output= arr.filter((x)=> x%2);


console.log(output); // Output: [5, 3]

//filter even values
// function isEven(x){
//     return x%2===0;
// }

// const output2= arr.filter(isEven);

const output2= arr.filter(function isEven(x){
    return x%2===0;
});

//arrow function
// const output2= arr.filter((x)=> x%2===0);

console.log(output2); // Output: [2, 6, 8]