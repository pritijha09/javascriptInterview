//Calculate the sum of elements of an array of numbers using recursion

var arrayData = [1,2,3,4,5,5,6];
function sum(arrayData){
    return _sumOfNum(arrayData, arrayData.length-1)
}

function _sumOfNum(arr, index){
    if(index == 0){
        return arr[0]
    } else{
        return arr[index] + _sumOfNum(arr, index-1)
    }
}

console.log(sum(arrayData))