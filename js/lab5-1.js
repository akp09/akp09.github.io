// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Cylinder Design Table
Input: ask for the variables in meters, Radius = r, Height = h
Process: plug r and h into formula for cylinder volume, then multiply by 1000 to go from m^3 to l
Output: Print the value for the volume */

//Input
function calculateVolume() {
//Input
let r = parseFloat(document.getElementById("radius").value);
let h = parseFloat(document.getElementById("height").value);
//Process
let v = Math.PI*Math.pow(r,2)*h*1000;
//Output
document.getElementById("volume").innerHTML = v;
}