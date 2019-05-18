// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Defining Table for 4-1
Input: get name from user and store as name
Process: put name in scripture then save as ps
Output: print result as output
*/

function myName() {
    //Input
    let name = document.getElementById("name1").value;
    //Process
    let ps = 'And it came to pass that the Lord spake unto me, saying: Blessed art thou, ' + name +', because of thy faith, for thou hast sought me diligently, with lowliness of heart.';
    //Output
    document.getElementById('output').innerHTML = ps;
}
/* Defining Table 4-2
Input: get city as c, state as s, zip code as z 
Process: put address in form c,s z as a
Output: print result as output
*/
/*
function addressBuilder() {
//Input
let c = document.getElementById("city").value;
let s = document.getElementById("state").value;
let z = document.getElementById("zip").value;
//Process
let a = c + ', ' + s + " " + z;
//Output
document.getElementById('output').innerHTML = a;
}*/