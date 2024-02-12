//Input a=10, b=15
// After swap a=15, b=10

function swap(a, b){
   a=a+b; //a=10+15=25
   b=a-b;//b= 25-15=10
   a=a-b;//a=25-10=15
    console.log(`After Swaping: a = ${a}, b = ${b}`)
}

console.log(swap(10, 15));