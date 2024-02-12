function revereSen(str){
    var result = str.split(" ").map((word)=>{
        return word.split("").reverse().join("")
    })
    return result.join(" ");
}

console.log(revereSen("priti jha"));