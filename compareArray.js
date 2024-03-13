//How to compare two array in JS
const arr1 = [1,2,3,4,5];
const arr2 = [1,2,3,4,5];

//use toString
console.log(arr1.toString() === arr2.toString());

//Approch 2

console.log(JSON.stringify(arr1) === JSON.stringify(arr2))