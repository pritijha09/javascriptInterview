/**Write a function that finds the largest number in an 
array of numbers in javascript*/
function findLargest(arr){
    if(arr.length===0){
        return null;
    }

    let largest = arr[0];
    for(let i=0;i< arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;
}

console.log(findLargest([200,1,4,5,20,33]))