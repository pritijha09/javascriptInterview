//Square array numbers
const numbers = [8,2,3,1,5,9];
const squareNumbers = [];
/**Don't use this */
// numbers.forEach((num)=>{
//     squareNumbers.push(num*num);
// })

//Do this instead
console.log(numbers.map(num=>num*num))