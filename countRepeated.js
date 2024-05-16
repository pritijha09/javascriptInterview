//Count repeated items in a String.
//i/p - "laptop"
//o/p - {l:1, a:1, p:2, t:1, o:1}
function countRepeated(str){
    var counter = {};
    for(let letter of str){
       counter[letter] = (counter[letter] || 0) + 1 
    }
    return counter;
}

console.log(countRepeated("laptop"))