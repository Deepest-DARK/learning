// nullish coalescing Operator (??) , only works with null and undefined

// let val1;
// val1 = undefined ?? 10


// console.log(val1)

// ternary operator (condition ? true : false;)

// const value = 5===5 ? true:false;
// console.log(value)

// Optional Chaining (?.)

let user = { profile: { name: 'John' } };
let userName = user.profile?.name;  // "John"
let userAge = user.profile?.age;    // undefined (doesn't throw error)
console.log(userAge)