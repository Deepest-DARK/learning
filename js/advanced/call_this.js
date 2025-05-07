function setUsername (username){
    this.username = username
}

function createUser (username,email,password){
    setUsername.call(this,username)  // we need to use call to call the function and give this as argument
    this.email = email
    this.password = password
}

const user = new createUser('vivaan','vivaan@gmail.com','12345678')
console.log(user)