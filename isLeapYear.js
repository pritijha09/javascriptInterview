//Function to check year is yeap year or not

//algo- 
//The year is multiple of 400.
//The year is a multiple of 4 and 
//not a multiple of 100.

function isLeapYearOrNot(year){
    return (year % 4 === 0 && year % 100 !== 0) 
    || year % 400 ===0
}
var result = isLeapYearOrNot(2016)
console.log(result)
