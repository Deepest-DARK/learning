// forof loop manly for array and Maps not objects

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

// const greeting = "hello world"

// for (const ch of greeting) {
//     console.log(ch);

// }

// const map = new Map()  // 

// map.set("IN","India")
// map.set("USA","AMERICA")  
// map.set("FR","FRANCE")

// console.log(map.get("IN"))   // get map
// console.log(map.has("IN"))
// map.delete("IN")
// console.log(map)
// console.log(map.size)

// for (const [key,value] of map) {
//     console.log(key , ":" , value)
// }


// const myObject = {
//     game1 : "gta",
//     game2 : "elder_ring",
//     game2 : "cs"
// }

// for (const element of myObject) {  // we can't iterate objects using for of
//     console.log(element);
// }

// forin loop manly for objects , also array but using index

// const shotCut = {
//     js : "javascript",
//     py : "python",
//     cpp : "c++",
//     rb : "ruby"
// }

// for (const key in shotCut) {  // will return the key
//    console.log(shotCut[key]);

// }

// const program = ["js","py","cpp","rb","java"]   // it will print the key , 0,1,2,3,4
// for (const value in program) {
//     console.log(value);

// }

// foreach manly for arrays its inbuild function in array

const coding = ["java", "python", "javascript", "ruby"]

// coding.forEach(function) // it need a calback function or the reference of that function

// coding.forEach(function (value, index, arr) {
//     console.log(value);
// })

// coding.forEach((value,index, arr)=> {
//     console.log(value)
// })

// coding.forEach(printMe)  // passing reference of the function 

// function printMe (value,index,arr){
//     console.log(value)
// }


const values = coding.forEach((value)=>{  // forEach doesn't return anything
    return value;
})
console.log(values)  // it will give undefined 