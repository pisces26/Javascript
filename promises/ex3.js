//creating a promise

const cart=["shirt", "pants", "shoes"];

const promise= createOrder(cart); //orderId
console.log(promise); //pending promise

promise
.then(function(orderId){
    console.log("Order created with ID:", orderId);
    return orderId; //returning orderId to the next then
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.error("Error creating order:", err.message);
})
.then(function(){
    console.log("no matter what happens, this will execute");
})


//producer
function createOrder(cart){
    const pr= new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId

        if (!validateCart(cart)){
            const err= new Error ("Invalid Cart");
            reject(err); //reject the promise with error
        }

        //logic for createOrder
        const orderId= "12345"; //dummy orderId
        if(orderId){
            setTimeout(function(){
                resolve(orderId); //resolve the promise with orderId
            }, 5000)
            
        }
    })

    return pr;
}

function validateCart(cart){
    if (cart.length === 0) {
        return false; // Invalid cart
    }
    // Additional validation logic can be added here
    return true; // Valid cart
}

function proceedToPayment(orderId){
    console.log("Proceeding to payment for order ID:", orderId);
    // Logic for proceeding to payment
    return new Promise(function(resolve, reject){
        resolve("payment successful");
    })
}