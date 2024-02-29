//Find second largest array
const array = [12,4,10,12,5,5,20,15,14,52]
function findSeconLargest(arr){
    //get unique array
    const uniqueArr = [...new Set(arr)]
    //sort array
    const sortedUnique = 
    uniqueArr.sort((a,b)=>b-a);
    return sortedUnique[1];
}

var result = findSeconLargest(array)
console.log(result)