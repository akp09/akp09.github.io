

/*Find the Middle number
Input: generate a list
Process: Call function getMiddle to find the middle number of the list. If the list is of even length add the 2 middle numbers and take the average.
Output: Print the array and the sum
*/


function arrayMaking(){
	let l = Math.floor((Math.random() * 15) + 2);
	let list = new Array(l);
	for (let i = 0; i < list.length; i++){
		list[i] = Math.floor(Math.random() * 11);
	}
	let output = getMiddle(list);
	document.getElementById("list").innerHTML = list;
	document.getElementById("output").innerHTML = output;
}

function getMiddle(list){
	let x = Math.ceil((list.length/2)) - 1;
	let middle;
	if (list.length % 2 !== 0){
 			middle = list[x];
	}
	else {
		middle = (list[x] + list[x+1]) / 2;
	}
	return middle;
}
