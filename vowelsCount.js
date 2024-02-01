function getVowelsCount(str){
    let vowels = 'aAeEiIoOuU';
    let vowelCount = 0;
    for(let i=0; i<str.length-1; i++){
        if(vowels.indexOf(str[i]) !== -1){
            vowelCount += 1;
        }
    }
    return vowelCount;
}
var result = getVowelsCount('this is javascript')
console.log(result);
