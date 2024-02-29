//Sort array of Object
const emp = [{
    name: 'John',
    age: 30
},
{
    name: 'Mike',
    age: 29
},{
    name: 'Alice',
    age: 23
}]

var result = emp.sort((a,b)=>{
    let x= a.name.toLowerCase();
    let y= b.name.toLowerCase();
    if(x>y){
        return -1;
    }else if(x<y){
        return 1
    }else{
        0
    }
})
console.table(result)