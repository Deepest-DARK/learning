// class User {
//     constructor(username, email, password) {
//         this.email = email
//         this.password = password
//     }

//     encPasswd() {
//         console.log("password enc succ...")
//     }

// }

// const user = new User('vivaan', 'vivaan@gmail.com', '123')
// user.encPasswd()

// same as above using prototype

// function User(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encPasswd = function () {
//     console.log("password enc succ...")
// }

// const user =  new User('vivaan', 'vivaan@gmail.com', '123')
// user.encPasswd()

// inheritance
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is : ${this.username}`)
    }
}

class Teacher extends User {  // extends helps to inharite the user class
    constructor(username, email, password) {
        super(username)    // it will set the username just like call() function
        this.email = email
        this.password
    }

    static changeId() {
        console.log("changing id...")
    }

    addCourse() {
        console.log(`course added by ${this.username}`)
    }
}

const tec = new Teacher('vivaan', 'vivaan@gmail.com', '123')
const usr = new User('ankit')
// tec.addCourse()
// tec.logMe()   // because of inheritance we can access the logMe() function 
// tec.changeId()   // give error because it is static it can only be called inside the class

// give true
// console.log(tec instanceof Teacher)
// console.log(tec instanceof User)

// give false
// console.log(tec === Teacher )
// console.log(tec === usr )