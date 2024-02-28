//Array destructuring
const numbers = [1,2,3,4,56,6];
const [first, second, ...rest] = numbers;
// console.log(first)
// console.log(second)
// console.log(rest)

//Swap

let a = 20;
let b = 30;
[a,b] = [b,a]
// console.log(a)
// console.log(b)

//Object

const person ={
    name: "Jhon",
    age: 30
}

const {name, age} = person
console.log(name)
console.log(age)