//Given a non-empty sequence of characters str, 
//return true if sequence is Binary, else return false

//input - 
//str = '101' (O/P- true)

//str = '72' (o/p - false)
function isBinary(str){
    for(let i=0; i<str.length; i++){
        if(str[i] !== '0' && str[i] !== '1'){
            return false;
        }
    }
    return true;
}
console.log(isBinary('72'))
