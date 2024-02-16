//Check if an element is present in an array using JavaScript
//approch 1 - using includes - Previous video

//approach 2 - Using indexOf

//approch 3 - Using for loop

function checkArrayElement(arr, element){
    let p = false;
    for(let i=0; i< arr.length-1; i++){
        if(arr[i]===element){
            p = true;
            break;
        }
    }
    if(p){
        console.log(`${element} is present in the array`)
    } else {
        console.log(`${element} is not present in the array`) 
    }
}

checkArrayElement([2,3,5,6,70,8], 70)

//function checkArrayElement(arr, element){
    //     if(arr.includes(element)){
    //         console.log(`${element} is present in the array`)
    //     } else {
    //         console.log(`${element} is not present in the array`) 
    //     }
    // }

    //function checkArrayElement(arr, element){
    //     if(arr.indexOf(element)>=0){
    //         console.log(`${element} is present in the array`)
    //     } else {
    //         console.log(`${element} is not present in the array`) 
    //     }
    // }
