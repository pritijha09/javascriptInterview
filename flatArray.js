//flat() method in js
 const array = [1,2,[3,4,[5,6]]]
 const flattenArray = array.flat();
 console.log(flattenArray)
 //You can specify the depth on the array
 const deeplyFlattenArray = 
 array.flat(2);
 console.log(deeplyFlattenArray)