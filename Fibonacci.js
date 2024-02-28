//How do you print a Fibonacci sequence using for loop?
//0,1,1,2,3,5,8,13,21......

function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
let n = 10
for(let i=0; i<n; i++){
    console.log(fibonacci(i))
}