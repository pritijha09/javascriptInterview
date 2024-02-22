//Javascript program to check both string anagram or not
//'hello' => 'oellh'

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let counter = {};
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) +1;
    }
    for(let items of str2){
        if(!counter[items]){
            return false;
        }
        return true;
    }

}

console.log(isAnagram('hello', 'oellhgg'))