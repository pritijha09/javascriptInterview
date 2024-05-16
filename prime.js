// write a program that generates 50 prime number
//check prime or not
function isPrime(num){
    if(num==1 || num == 0) return false;
    //run loop from 2 to n-1
    for(let i=2; i<num; i++){
        if(num % i == 0) return false;
    }
    //otherwise number is prime
    return true;
}
let num = 100;
var result = [];
//check of every number from 1 to num;
for(let i=1; i< num; i++){
    if(isPrime(i)){
        result.push(i);
    }
}
console.log(result.join(' '));