//Find the Smallest and Biggest Numbers
//minMax([1, 2, 3, 4, 5]) ➞ [min:1, max:5]
//minMax([2334454, 5]) ➞ [min:5, max:2334454]

function getMinMax(arr){
    return arr.reduce(({min, max}, v)=>({
        min: min < v ? min : v,
        max: max > v ? max : v
    }),{min: arr[0], max: arr[0]})
}

console.log(getMinMax([2,4,0,81,6]))