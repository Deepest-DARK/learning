// const first_promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("async task completed")
//         resolve() // it will connected to .then
//     }, 1000)
// })

// first_promise.then(() => {   // we get a callback inside in .then
//     console.log("promise consumed")
// })

// alternative approach to create
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve({username:"vivaan"})
//     },1000)
// }).then(()=>{
//     console.log("promise consumed")
// })


// const newPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"vivaan"})
//     },1000)
// })

// console.log(newPromise); // it will give Promise { <pending> }


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const flag = true;
//         if(flag){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     }, 1000)
// }).then(() => {
//     console.log("inside then")
// }).catch(() => {
//     console.log("inside catch");  
// }).finally(()=>{
//     console.log("it will print what ever the case")
// })

// const task = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(true){
//             resolve({username : "vivaan"})
//         }
//         else{
//             reject(new Error("unknown host"))
//         }
//     },1000)
// })

// async function getTask() {
//     try {
//         const response = await task
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getTask()
// setTimeout(()=>{
//     console.log("task done...")
// },2000)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    }).then((data) => {     // its called thenable because the then is inside then
        console.log(data)
    })
    .catch((error) => {
        console.log("error while fetching user data")
    })


