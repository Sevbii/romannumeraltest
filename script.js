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
            if (input == 4 || input == 9){
                if (input == 4){
                    output += "IV";
                    input = 0;
                }
                else{
                    output += "IX";
                    input = 0;
                }
            }
            else{
                tempName = arr[z];
                tempValue = window[tempName];
                tempDivide = input/tempValue;
                if (tempDivide >= 1){
                    tempDivide = Math.floor(tempDivide);
                    for (i=0; i<tempDivide; i++){
                        output += tempName;
                    }
                    input -= tempDivide * tempValue;
                }
            }
        }
        document.getElementById("Output").innerHTML = output;
    }
}