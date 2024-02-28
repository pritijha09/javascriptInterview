//Calculate the sum of natural number up to n using recursion method

function addNumbers(n){
    //using recursion
    if(n==0){
        return 0;
    }
    return n + addNumbers(n-1);


    //using for loop
    // var sum = 0;
    // for(let i=0; i<=n; i++){
    //     sum += i;
    // }
    // return sum;
}

console.log(addNumbers(10));