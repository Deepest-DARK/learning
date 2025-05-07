// const user = {
//     username : "vivaan",
//     email : "emample.com",
//     isLoggedIn : true,

//     getName : function(){
//         console.log(`username is : ${this.username}`);

//     }
// }

// const usr = user;
// console.log(usr.email)
// console.log(usr.getName())



function User(username, email, isLoggedIn) {
    this.username = username;
    this.email = email;
    this.isLoggedIn = isLoggedIn;

    return this;   // don't need to give return if new keyword is present , but need to use return when not using new
}

// const usr1 = User("vivaan", "vivaan@gmail.com", true)
// const usr2 = User("ankit", "ankit@gmail.com", false)
// console.log(usr1)
// output , it will override the this 
// username: 'ankit',
// email: 'ankit@gmail.com',
// isLoggedIn: false


// so we need to use new keyword

const usr1 = new User("vivaan", "vivaan@gmail.com", true)
const usr2 = new User("ankit", "ankit@gmail.com", false)
console.log(usr1)