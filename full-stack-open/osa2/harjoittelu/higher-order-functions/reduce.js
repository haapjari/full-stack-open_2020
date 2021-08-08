var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

/*
var totalAmount = orders.reduce(function(sum, order) {
    console.log("hello", sum, order)
    return sum + order.amount
}, 0)
*/

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount)