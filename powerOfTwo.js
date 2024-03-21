//Program to check if number is a power of 2
function isPowerOfTwo(number){
    if(number<=0){
        return false;
    }
    while(number>1){
        if(number%2 !== 0){
            return false;
        }
        number = number/2;
    }
    return true;
}
console.log(isPowerOfTwo(17));