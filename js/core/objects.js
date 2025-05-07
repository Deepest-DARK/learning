// singleton
// object.create

// object literals 

// const mySym = Symbol("key1")

// const jsUser = {
//     name: "vivaan",   // "name" or name are same
//     "full name": "vivaan yadav",
//     [mySym]: "myKey1",
//     "age": 18,
//     location: "kolkata",
//     email: "vivaan@gmail.com",
//     0: false
// }

// console.log(jsUser["full name"])
// console.log(jsUser.age)
// console.log(jsUser[mySym])

// Object.freeze(jsUser)  // it will freeze the jsUser means the value of jsUser can't be change

// jsUser.email = "ankit@gmail.com";
// console.log(jsUser.email);


// jsUser.greet = function(){
//     // console.log("hello there") 
//     return `hello jsUser , ${this.name}`
// }

// console.log(jsUser.greet())

// const user  = {
//     name:"vivaan",
//     name:"ankit"   // always assign to the latest key , key should be unique
// }

// console.log(user)  

// const obj1 = { 1: "a", 2: "b", 3: "c" }
// const obj2 = { 4: "d", 5: "e", 6: "f" }

// // const obj3 = Object.assign({}, obj1, obj2)  // why {} , because it guranteed it will be an object
// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const chatUser = {
    name: "warrior",
    age: 999,
    skill: "sword"
}

// console.log(Object.keys(chatUser));  // print all the keys
// console.log(Object.values(chatUser));  // print all the values
// console.log(Object.entries(chatUser)); // print all the key values in an array , [ [ 'name', 'warrior' ], [ 'age', 999 ], [ 'skill', 'sword' ] ]
// console.log(Object.hasOwnProperty("name")) // to check if its available inside the object or not 
// console.log("name" in chatUser)

const {age:a} = chatUser // destructuring
console.log(a)

