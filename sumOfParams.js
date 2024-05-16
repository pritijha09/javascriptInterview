function sumOfDigits(number){
    var sum = 0;
    var numStr = number.toString();
    for(let i=0; i< numStr.length; i++){
        sum += parseInt(numStr[i])
    }
    return sum;
} 
console.log(sumOfDigits(12))