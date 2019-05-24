// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Net PAy Design Table
Input: ask for the variables hours worked = h, wage = w.
Process: Net = gross-taxes=(h*w)-(h*w*.15)
Output: Print the value for the Net Pay */

//Input
function calculateNetPay() {
//Input
let h = parseFloat(document.getElementById("hours").value);
let w = parseFloat(document.getElementById("wage").value);
//Process
let  np = (h*w)-(h*w*.15);
//Output
document.getElementById("netPay").innerHTML = np.toFixed(2);
}