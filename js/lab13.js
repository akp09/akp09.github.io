

/*Find the Middle number
Input: generate a list
Process: Call function countEvens to count the nember of even values in the array, call function multiply to multiply the values in the list by a number.
Output: Print the array, the number of evens, and print the multiplier and the multiplied array
*/


function arrayMaking(){
	let l = Math.floor((Math.random() * 15) + 2);
	let list = new Array(l);
	let multiplier = Math.floor((Math.random() * 5) + 2);
	let newList = new Array();
	for (let i = 0; i < list.length; i++){
		list[i] = Math.floor(Math.random() * 11);
	}
	let evenCount = countEvens(list);
	newList = multiply(list, multiplier);
	document.getElementById("list").innerHTML = list;
	document.getElementById("output1").innerHTML = evenCount;
	document.getElementById("multiplier").innerHTML = multiplier;
	document.getElementById("output2").innerHTML = newList;
	
	
}

function countEvens(list){
	let evens = 0;
	for (let i = 0; i < list.length; i++){
		if (list[i] % 2 == 0){
			evens++;
		}
	}
	return evens;
}

function multiply(list, multiplier){
	let product = new Array();
	for (let i = 0; i < list.length; i++){
	product[i] = list[i] * multiplier;
	}
	return product;
}