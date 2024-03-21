//Square Star Pattern in Javascript
/**
*****
*****
*****
*****
*****
 */

let n = 5 //row and column count
let string = "";
for(let i=0;i<n;i++){
    for(let j=0; j<n; j++){
        string += "*";
    }
    //new line after each row
    string += "\n";
}
console.log(string)