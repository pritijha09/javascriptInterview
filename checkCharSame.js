//Given a string, check if all its
// characters are the same or not.

function checkCharSame(str){
    if(str.length<=1){
        return true;
    }
    for(let i=1; i<str.length; i++){
        if(str[i] !== str[0]){
            return false;
        }
    }
    return true;
}
console.log(checkCharSame('ppppp'))