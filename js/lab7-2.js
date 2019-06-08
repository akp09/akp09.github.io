// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Retail Sales Design Table
Input: Set upall date getting variables.
Process: Check if the dayOfWeek is Sat or Sun, or one of the Holidays if so then print sleep in, otherwise print Get up.
Output: Print the value for the Result */



//Setup
let dayOfWeek = new Date().getDay();
let month = today.getMonth()+1;
let mydate = today.getDate();
//Input
function checkAlarm() {
	let result = "error";
//Process
if ((month == 1 && mydate == 1) || (month == 7 && mydate == 4) ||  (month == 12 && mydate == 25) || (dayOfWeek == 0 || dayOfWeek == 6)){
	result = "Sleep in.";
}
else {
	result = "Get Up!";
}
//Output
document.getElementById("result").innerHTML = result;
}
