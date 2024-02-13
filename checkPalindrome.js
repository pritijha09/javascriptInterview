//function that check string is palindrom or not
function checkPalindrome(str){
    var j = str.length-1;
    for(let i=0; i<j/2; i++){
        var x = str[i] //forward
        var y = str[j-i] //backword
        if(x != y){
            return false;
        }
    }
    return true;
}

function isPalindrome(str){
    var ans = checkPalindrome(str);
    if(ans){
        console.log("given string is Palindrome")
    } else{
        console.log("given string is not Palindrome")
    }
}
isPalindrome("dev");

