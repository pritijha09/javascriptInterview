//How to get tomorrow’s date in a string 
//format in JavaScript ?

function getTomorrowdate(){
    //Creating the date instance
    let d = new Date();

    //Adding one date to the current date
    d.setDate(d.getDate() + 1);

    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString();
    let day = (d.getDate()).toString();

    //Adding 0 if the day and month is one digit
    month = month.length == 1? month.padStart('2', '0') : month;
    day = day.length == 1? day.padStart('2', '0') : day;

    console.log(`${day}-${month}-${year}`);
}
getTomorrowdate();
