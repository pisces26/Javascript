const cart=[shirt, pants, shoes];

// api.createOrder(cart, function(){

//     api.proceedToPayment(function(){

//         api.showOrderSummary(function(){

//             api.updateWallet()

//         })

//     })
// })


//promise chaining
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(orderId){
    return showOrderSummary(orderId);
})
.then(function(orderId){
    return updateWallet(orderId);
})

//get out of callback hell