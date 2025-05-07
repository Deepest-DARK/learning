// everything is object in js 
// array,string,function are object at the end


// function mult (x){
//     return x*5
// }

// mult.username = 'vivaan'

// console.log(mult(3))
// console.log(mult.username);


// function goods(name, price) {
//     this.name = name;
//     this.price = price;
//     return this;
// }

// goods.prototype.increasePrice = function (price) {
//     this.price += price;
// }

// goods.prototype.getPrice = function () {
//     console.log(`${this.name} price is : ${this.price}`);

// }

// const tea = new goods('tea', 50)

// console.log(tea)
// tea.increasePrice(100)
// tea.getPrice()


const heroes = ['thor', 'spiderman']

const heroPower = {
    thor: 'hammer',
    dr_strange: 'magic',
    hulk: 'beast'
}

Object.prototype.vivaan = function(){
    console.log("it is inside the object")
}

// heroes.vivaan()   // how we can access the vivaan throgh the heroes array because we are setting the prototype in the object
// array,function,string first check it's method if they didn't find they go one level up and search in the object and then go one level up to null

// but if we only give power to the array other objects like function can't access it because it is not set to the main object

Array.prototype.onlyMe = function(){
    console.log('array power...');
    
}

// heroes.onlyMe()         // it will work 
// heroPower.onlyMe()   // give error is not a function

// inheritance

String.prototype.trueLength = function(){   // custom function
    console.log(this)
    console.log(this.trim().length)
}

"vivaan   ".trueLength()