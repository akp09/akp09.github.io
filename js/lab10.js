

/*Sum Odd Integers Design Table
Input: Get temperature as tempF and windspeed as speed
Process: Call function windChill to calculate the windchill based on the two inputs. 
Output: Print the value
*/

function doInputOutput(){
    //Input
    let tempF = parseInt(document.getElementById("temp").value);
    let speed = parseInt(document.getElementById("speed").value);
    //Process
    let output = windChill(tempF, speed);
    //Output
    document.getElementById("output").innerHTML = output;
    }
    
    function windChill(t, s){
        let f = "";
        if (t <= 50 && s >= 3){
            f = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)).toFixed(2);
        }
        else {
            f = "N/A";
        }
        return f;
    }