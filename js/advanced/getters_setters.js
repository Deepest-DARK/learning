// using class

// class User {
//     constructor(username, password) {
//         console.log('inside constructor')
//         this._username = username   // why _ because it is use to set it to private 
//         this._password = password
//     }

//     get password() {
//         console.log("inside password getter")
//         return this._password.toUpperCase()    // need to do _ so that we dont' get the Maximum call stack size exceeded
//     }
//     set password(value) {
//         console.log("inside password setter");
//         this._password = value
//     }
// }

// const vivaan = new User('vivaan', "password")
// console.log(vivaan.password)  // give the return value from getter : PASSWORD
// console.log(vivaan._password) // give the actual value : password


// using function

// function User(username, password) {
//     this._username = username
//     this._password = password

//     Object.defineProperty(this, 'password', {
//         get: function () { return this._password.toUpperCase() },
//         set: function (value) { this._password = value }
//     })
// }

// const vivaan = new User('vivaan','password')
// console.log(vivaan.password)  // give the return value from getter : PASSWORD
// console.log(vivaan._password) // give the actual value : password


// using objects

// const User = {
//     _username : 'vivaan',
//     _password : 'password',

//     get password(){
//         return this._password.toUpperCase()
//     },

//     set password(value){
//         this._password = value
//     }
// }

const vivaan = Object.create(User)   // this is factory function
// console.log(vivaan.password)  // give the return value from getter : PASSWORD
// console.log(vivaan._password) // give the actual value : password