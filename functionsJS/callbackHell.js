// const cart=[shirt, pants, shoes];

// api.createOrder(cart, function(){

//     api.proceedToPayment(function(){

//         api.showOrderSummary(function(){

//             api.updateWallet()

//         })

//     })
// })

//unreadable and unmaintainable code
//PYRAMID OF DOOM structure

//inversion of control

const cart=[shirt, pants, shoes];

api.createOrder(cart, function(){

    api.proceedToPayment()
})