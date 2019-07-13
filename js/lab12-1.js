

/*Add the first and last values of a list
Input: generate a list
Process: Call function addEnds to calculate the sum of the first and last values
Output: Print the array and the sum
*/


function arrayMaking(){
	let l = Math.floor((Math.random() * 15) + 2);
	let list = new Array(l);
	for (let i = 0; i < list.length; i++){
		list[i] = Math.floor(Math.random() * 11);
	}
	let output = addEnds(list);
	document.getElementById("list").innerHTML = list;
	document.getElementById("output").innerHTML = output;
}

function addEnds(list){
	let x = list.length - 1;
	let sum = list[0] + list[x];
	return sum;
}
