//Program to count vowels in a string in JS
function isVowel(ch){
    ch = ch.toLowerCase();
    return ch == 'a' || ch == 'e' ||
    ch == 'i' || ch == 'o' || ch == 'u';
}

function vowelCount(str){
    var count = 0;
    for(ch of str){
        if(isVowel(ch)){
            count++;
        }
    }
    return count;
}

console.log(vowelCount('Mumbai'))