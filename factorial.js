//Calculate factorial of n . n! = 1*2*3*4....n

function calculateFact(n){
    //Using recursion
    if(n<=1){
        return n;
    }
    return n * calculateFact(n-1)
}
console.log(calculateFact(10));