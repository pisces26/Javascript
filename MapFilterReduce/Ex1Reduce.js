//reduce is used where we need to reduce the array to a single value

const arr= [3,6,4,2,8];

//sum of all elements
// function findSum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr)); // Output: 23

//sum of all elements using reduce

const output= arr.reduce(function(acc, curr){
    acc= acc+curr;
    return acc;
},0); //initial value of acc is 0

console.log(output); // Output: 23


//find max value
// function findMax(arr){
//     let max=0;
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr)); // Output: 8

//find max value using reduce
const output2= arr.reduce(function(max, curr){
    if(curr>max){
        max= curr;
    }
    return max;
}, 0); //initial value of acc is 0

console.log(output2); // Output: 8

