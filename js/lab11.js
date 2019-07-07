

/*Investment Calculator Design Table
Input: In function doFV() get inputs Principal, Annual rate, number of years, periods per year as p, ar, ny, ppy respectively
Process: Call function computeFutureValue to calculate the future calue of the investment according to the recieved values
Output: Print the value
*/

function doFV(){
    //Input
    let p = parseFloat(document.getElementById("p").value);
    let ar = parseFloat(document.getElementById("ar").value);
    let ny = parseFloat(document.getElementById("ny").value);
    let ppy = parseFloat(document.getElementById("ppy").value);
    let ppr = ar/ppy;
    let np = ppy*ny;
    //Process
    let output = computeFutureValue(p, ppr, np).toFixed(2);
    //Output
    document.getElementById("output").innerHTML = "$" + output;
    }
    
    function computeFutureValue(a, r, n){
        let fv;
            fv = a*Math.pow((1+r), n)
        
        return fv;
    }