// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Sum Odd Integers Design Table
Input: Get a number from the user and store it as t
Process: Add all the odd numbers between 1 and t
Output: Print the sum of all numbers added in the process
*/

function sumOdds(){
//Input
let t = parseInt(document.getElementById("upperLimit").value);

//Process
document.getElementById("userNumber").innerHTML = t;
let i = 1;
let sum = 0;
while (i <= t){
	sum += i;
	i += 2;
}
//Output
document.getElementById("output").innerHTML = sum;
}