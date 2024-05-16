//sort array without the use of a sort function
//input :-var a= [1,5,2,3,4,6,7,8];
//output :-var a=[1,2,3,4,5,6,7,8];

function sortArray(arr){
    let arrLength = arr.length;
    for(let i=0; i<arrLength; i++){
        let min = i;
        for(j=i+1; j<arrLength; j++){
            if(arr[j] < arr[min]){
                min=j;
            }
        }
        //swap
        if(i !== min){
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
var result = sortArray([1,5,2,3,4,6,7,8])
console.log(result)