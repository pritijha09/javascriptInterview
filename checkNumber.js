//JavaScript Program to Check if a number is  
//Positive, Negative, or Zero

function checkNumber(num){
    switch(Math.sign(num)){
        case 1:
            console.log("The number is Positive.")
            break;
        case -1:
            console.log("The number is negative");
            break;
        case 0: 
            console.log("The number is zero")
            break;
    }
}

checkNumber(0)


