const numbers = [1, 2, 3, 4, 5, 6, 7, 8]


// map , helps us to iterate through the array and update the elements
const updatedNumbers = numbers.map((num) => num + 2)
// console.log(updatedNumbers);


// filter , getting elements based on the condition
const filterNumber = numbers.filter((num) => { return num > 4 })
// console.log(filterNumber)


// reduce


// chaining

const newNum = numbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 51)

// console.log(newNum);


const initialValue = 0;
const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial)