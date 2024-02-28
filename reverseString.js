//Function to reverse string in Javascript

function reverseString(str){
    if(str.length==0){
        return;
    }
    var newStr = "";
    for(let i=str.length-1; i>=0; i--){
        newStr += str[i]
    }
    return newStr;
}

console.log(reverseString('ha'))