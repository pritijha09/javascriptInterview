//How to find the longest word within the string?
//i/p - Hello guys this is devCodingGigs
//O/p - devCodingGigs

function longest(str){
    //split the string with spaces into array
    var str = str.split(" ");
    //console.log(str)
    //Get the index of largest word
    let index = str.reduce((acc,curr, i)=>{
        if(curr.length > str[acc].length){
            return i;
        }
        return acc;
    }, 0)
return str[index];
}

var str = "Hello guys this"
console.log(longest(str));