// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Footwear Weather Design Table
Input: Have the user input the weather type from a list of options.
Process: Match the Weather option to the correct footwear output.
Output: Tell the user footwear option. */

//Input
function matchWeather() {
//Input
let w = document.getElementById("weather").value;
let fw;
//Process
if (w=="h"){
	fw = "Sandals";	
	}
	else if (w=="r"){
	fw = "Galoshes";	
	}
	else if (w=="s"){
	fw = "Boots";		
	}
	else if (w=="c"){
	fw = "Shoes";	
	}
//Output
document.getElementById("footwear").innerHTML = fw;
}