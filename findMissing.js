//JavaScript Program to Find the Missing Number
//Input :  arr = [1,2,3,4,5,7]
//Output : 6
function findMissingNum(arr){
    const n = arr.length+1;
    const sumOfFirstN = (n*(n+1))/2;
    let sumOfArr = 0;
    for(let i=0; i< n-1; i++){
        sumOfArr += arr[i]
    }

    let missingNumber = sumOfFirstN - sumOfArr;
    return missingNumber;
}
console.log(findMissingNum([1,2,3,4,6,7]))