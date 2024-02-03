function reverseSen(str){
    if(str.length){
        var arr = str.split(" ");
      var result = arr.map((word)=>{
          return word.split("") .reverse().join("");
        })
    } else {
        alert("blank string")
    }
    return result.join(" ")
}

console.log(reverseSen("Hello How are you"))