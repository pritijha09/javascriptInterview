//Program to count words of a string using for loop
function numberOFWords(str){
    let count=0;
    let check=false;
    for(let i=0; i< str.length; i++){
        if(str[i] !== ' ' && !check){
            count++;
            check = true;
        } else if(str[i] === ' '){
            check = false;
        }
    }
    return count;
}

console.log(numberOFWords("hello world "))