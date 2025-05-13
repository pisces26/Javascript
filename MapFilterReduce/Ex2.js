const users=[
    {firstName:'John', lastName:'Doe', age:25},
    {firstName:'Jane', lastName:'Smith', age:30},  
    {firstName:'Jim', lastName:'Brown', age:35},
    {firstName:'Jake', lastName:'White', age:25},
];

//list of full names

const output= users.map(x => x.firstName+' '+x.lastName);
console.log(output); // Output: ['John Doe', 'Jane Smith', 'Jim Brown', 'Jake White']

//number of users with particular age
const output2= users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(output2); // Output: {25: 2, 30: 1, 35: 1}

//find firstname of all users with age<30

const output3=users.filter(x => x.age<30).map(x=> x.firstName);
//chaining filter and map
//here map works on filtered array

console.log(output3); // Output: ['John', 'Jane']


//find firstname of all users with age<30 using reduce
const output4= users.reduce(function(acc, curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(output4); // Output: ['John', 'Jane']