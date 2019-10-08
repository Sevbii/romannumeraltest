var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;
var arr = ["I", "V", "X", "L", "C", "D", "M"];

function Calculate(){
    var input = document.getElementById("Input").value;
    if (input != ""){
        var tempDivide;
        var tempName;
        var tempValue;
        var output = "";
        for (z=6; z>=0; z--){
            tempName = arr[z];
            tempValue = window[tempName];
            tempDivide = Math.floor(input/tempValue);
            if ((tempName != "M") && (tempDivide == 4 || tempDivide == 9)){
                if (tempDivide == 4){
                    output += tempName;
                    output += arr[z+1];
                    input -= tempDivide * tempValue;
                }
                if (tempDivide == 9){
                    output += tempName;
                    output += arr[z+2];
                    input -= tempDivide * tempValue;
                }
            }
            else if (tempDivide >= 1){
                for (i=0; i<tempDivide; i++){
                    output += tempName;
                }
                input -= tempDivide * tempValue;
            }
        }
        document.getElementById("Output").innerHTML = output;
    }
}