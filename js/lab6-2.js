// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Simple Addition Design Table
Input: Generate 2 random numbers and ask the user for the sum of them
Process: Compare the number with  
Output: Print the value for the Net Pay */



//Setup
let x = Math.floor(Math.random() * 101);
let y = Math.floor(Math.random() * 101);
let p = x + " + " + y + " = ";
document.getElementById("p").innerHTML = p;

//Input
function checkMath() {	
let userAnswer = parseInt(document.getElementById("solution").value);
let correctAnswer = x + y;
//Process
let evaluation = "fart";
if (userAnswer == correctAnswer){
	evaluation = " Correct! Good job."
}
else {
	evaluation = " Sorry. That is incorrect."
}
//Output
document.getElementById("evaluation").innerHTML = evaluation;
}
