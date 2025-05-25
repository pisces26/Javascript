// const cart=["shirt", "pants", "shoes"];
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// const promise= createOrder(cart);

// //{data: undefined}

// //attach callback to the promise

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

//control of the program is with user


const GITHUB_API_URL="https://api.github.com/users/akshaymarch7";

const user= fetch(GITHUB_API_URL);

console.log(user);

user.then(function(data){
    console.log(data);
});