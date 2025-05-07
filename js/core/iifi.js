// Immediately Invoked Function Expressions (IIFE)

// sometime global scope pollute the variable so to remove the overheat we use iife

(function connectDb() {
    console.log("DB CONNECTED")
})();  // need to use ; because it will give error , TypeError: (intermediate value)(...) is not a function

(() => {
    console.log("DB CONNECTED TWO")
})()

console.log('print')