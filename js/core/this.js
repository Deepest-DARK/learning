// const user = {
//     username : "vivaan",
//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this)
//     }
// }
    
// user.welcomeMessage()
// user.username = "hacker"
// user.welcomeMessage()

// console.log(this)

function temp(){
    let username = "vivaan";
    console.log(this)  // this will print undefined
}
temp()

// const temp = () => {
//     let username = "vivaan";
//     console.log(this)  // this will print undefined
// }
// temp()

// const  addTwo = (num1,num2) =>{
//     return num1 + num2;   // explicit return

// console.log(addTwo(2,3))

// const addTwo = (num1, num2) => num1 + num2; // implicit return
// console.log(addTwo(2, 3));

// console.log("hello");
