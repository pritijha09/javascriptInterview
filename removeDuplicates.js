//Remove duplicates from array
//arr = ["a", "v", "q", "a", "v", "s", "t"]
//Output = ["a", "v", "q", "S", "t"]

//Using Set()

function removeDuplicates(arr){
    return [... new Set(arr)]
}





//Using forEach loop

// function removeDuplicates(arr){
//     var uniqueArr = [];
//     arr.forEach(element => {
//         if(!uniqueArr.includes(element)){
//             uniqueArr.push(element)
//         }
//     });

//     return uniqueArr;
// }


var result  = removeDuplicates(["a", "v", "q", "a", "v", "s", "t"]);
console.log(result)








//Using filter method

// function removeDuplicates(arr){
//     return arr.filter((ele, index)=> arr.indexOf(ele) === index);
//     }

//Using forEach

// function removeDuplicates(arr){
//     let uniqueArr = [];
//     arr.forEach(element => {
//         if(!uniqueArr.includes(element)){
//             uniqueArr.push(element)
//         }
//     });
//     return uniqueArr;
// }