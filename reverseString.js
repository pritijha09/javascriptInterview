//Function to reverse string in Javascript
//i/p= dev
//o/p - ved

function reverseString(str){
   //using for loop
   var str = str.split("");
   var reverseStr = "";
   for(let i=str.length-1; i>=0; i--){
    reverseStr += str[i]
   }
   return reverseStr; 
}

console.log(reverseString('priti'))