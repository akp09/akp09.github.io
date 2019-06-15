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

function numberGuessGame() {
    let message =
        "I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100.";
    let answer = Math.floor(Math.random() * 101);;
    let guess;
		let count = 0;
    do {
        guess = parseInt(prompt(message));
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another integer.";
					count ++;
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
					count ++;
        }
    } while (guess != answer);
    message = guess + " is correct!";
		count ++;
	document.getElementById("output").innerHTML = message;
	document.getElementById("guessesTaken").innerHTML = count;
}
