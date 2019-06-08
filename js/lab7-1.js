// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Retail Sales Design Table
Input: Get the amount of the purchase
Process: Check if the dayOfWeek is Tues or Wed, if it is >= $50 take 10% off. 
					Then multiply add the 6% sales tax.
Output: Print the value for the Final Cost */



//Setup
let dayOfWeek = new Date().getDay();
//Input
function finalCost() {	
let bp = parseFloat(document.getElementById("basePrice").value);
//Process
if ((bp > 50) && (dayOfWeek == 2 || dayOfWeek == 3)){
	subtotal = bp*.90;
}
else {
	subtotal = bp;
}
//Output
	let total = subtotal*1.06;
document.getElementById("total").innerHTML = total.toFixed(2);
}
