//Javascript filter method
const numbers = [1,2,3,4,5,67,8,9,100];
//Using filter to get even number
const even = numbers.filter((num)=>{
    return num%2 === 0;
})
console.log(even)