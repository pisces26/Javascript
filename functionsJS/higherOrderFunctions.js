const radius=[1,3,2,4];

const area=function(radius){
    return Math.PI*radius*radius;
}

const circumference=function(radius){
    return 2*Math.PI*radius;
}

const diameter=function(radius){
    return 2*radius;
}

const calculate=function(radius, logic){
    const output=[];
    for(let i=0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// Output: [3.141592653589793, 28.274333882308138, 12.566370614359172, 50.26548245743669] [6.283185307179586, 18.84955592153876, 12.566370614359172, 25.1327412287191] [2, 6, 4, 8]

//without optimization

// const radius=[1,3,2,4];
// const calculateArea=function(radius){
//     const output=[];
//     for(let i=0; i<radius.length;i++){   
//         output.push(area(radius[i]));
//     }
//     return output;
// }
// const calculateCircumference=function(radius){
//     const output=[];
//     for(let i=0; i<radius.length;i++){
//         output.push(circumference(radius[i]));
//     }
//     return output;
// }
// const calculateDiameter=function(radius){
//     const output=[];
//     for(let i=0; i<radius.length;i++){
//         output.push(diameter(radius[i]));
//     }
//     return output;
// }
// console.log(calculateArea(radius)); // Output: [3.141592653589793, 28.274333882308138, 12.566370614359172, 50.26548245743669]
// console.log(calculateCircumference(radius)); // Output: [6.283185307179586, 18.84955592153876, 12.566370614359172, 25.1327412287191]
// console.log(calculateDiameter(radius)); // Output: [2, 6, 4, 8]
