import { checkOperator } from "./checkOperator.js";

let equals = document.getElementById("equals");


  

equals.onclick = function(){

    function doMath(first, second){

        if (operator === "add")
        {
            answer = first + second;
        }
        else
        {
            answer
        }
    }

    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let operator = checkOperator();

    console.log(first);
    console.log(operator);
    console.log(second);
    console.log("equals");

    let answer;
    console.log(answer)

    
    }
  

