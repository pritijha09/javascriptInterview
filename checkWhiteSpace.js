//JavaScript Program to Check if a 
//String Contains any Whitespace Characters
function checkWhiteSpace(str){
    let whitespace = new Set([" ", "\t", "\n"]);
    for(let i=0; i<str.length; i++){
        if(whitespace.has(str[i])){
            console.log('The String contains whitespace char.')
        }
    }
    console.log("The String does not contains whitespace char.")
}

checkWhiteSpace("de v")