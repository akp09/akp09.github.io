// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Sum Odd Integers Design Table
Input: Get a number from the user and store it as num
Process: Build the Table by multiplying num by each number 1-12
Output: Print a list of all the multipications.
*/

function createTable(){
//Input
let num = parseInt(document.getElementById("num").value);
let table = "";
//Process
document.getElementById("userNumber").innerHTML = num;
for (let i = 1; i <= 12; i++){
	table += num + " x " + i + " = " + num*i + "<br>";
}
//Output
document.getElementById("output").innerHTML = table;
}