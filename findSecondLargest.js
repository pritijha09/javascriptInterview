//Array sort assending and decending order;

function sortArray(arr){
    var nerArr = [...arr];
   var assesding = nerArr.sort((a,b)=>a-b);
   var dessending = arr.sort((a,b)=>b-a);
   return {assesding, dessending}
}
console.log(sortArray([21,0,12,89,93,23]))