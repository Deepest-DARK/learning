// console.log(Math.PI)

Math.PI = 5;

// console.log(Math.PI);  // it will still print the original pi

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"))
// {
//     value: 3.141592653589793,
//     writable: false,        // Determines whether the value of the property can be changed.
//     enumerable: false,      // Determines whether the property will show up during enumeration ex: Object.key(obj) , for...in , console.log(obj)
//     configurable: false     //  Controls whether the property descriptor can be changed, and whether the property can be deleted.
// }
// its hard coded value can't be changed

const tea = {
    name: 'Big Red Robe',
    price: '1.2m',
    isAvailable: false
}

console.log(tea)

console.log(Object.getOwnPropertyDescriptor(tea, "price"));

Object.defineProperty(tea, 'price', {
    writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(tea, "price"));

console.log(tea);
