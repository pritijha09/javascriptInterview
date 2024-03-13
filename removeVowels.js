//Remove vowels 

function removeVowels(str){
    let result = '';
    
    for(let ch of str.toLowerCase()){
        //check id the character is vowel
        if(!['a', 'e','i','o','u'].includes(ch)){
            result += ch;
        }
    }
    return result;
}

console.log(removeVowels('Hello World'))