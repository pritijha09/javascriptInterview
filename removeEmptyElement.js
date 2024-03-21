//Remove empty elements from an array in JavaScript
var arr = ['js','angular', , undefined, ,'Java', ,'PHP']

function removeEmpty(){
    let filterdArrayData = arr.filter((ele)=>{
        return ele != null;
    });
    console.log(filterdArrayData)
}
removeEmpty();
