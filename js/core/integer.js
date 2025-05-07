// const score = 400
// const balance = new Number(100)
// console.log(score);
// console.log(balance);

// console.log(balance.toString())

// const value = 135.586;
// console.log(value.toFixed(2))  // give the intergs to 2 decimal place
// console.log(value.toPrecision(5))  // give the precise value 

// const largeNumber = 10000000
// console.log(largeNumber.toLocaleString())



// Maths properts , its in-build in js
// console.log(Math.PI)        // give the value of pi
// console.log(Math.abs(-3))      // convert negative numbers to positive
// console.log(Math.round(8.2))   // give the round of value , ex : 6.9 -> 7
// console.log(Math.ceil(4.2))    // give the top value , ex : 4.2 -> 5
// console.log(Math.floor(5.8));  // give the lower value , ex : 5.8 -> 5

// generate a random number
// console.log(Math.random())  // give numbers between 0 - 1
// console.log(Math.floor(Math.random()*10) + 1)
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
