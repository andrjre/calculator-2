let first = document.getElementById("first").value;
let second = document.getElementById("second").value;
let equals = document.getElementById("equals");
let operator = document.getElementsByName("operator");

if(document.getElementById("add").checked)
{
    operatorChecked = "add";
}
else
{
    operatorChecked = "not add";
}

equals.onclick = function(){
    console.log(first);
    console.log(operatorChecked);
    console.log(second);
    console.log("equals");
    console.log("answer")
}

function add(x , y){
    console.log(x + y);
}

function subtract(x , y){
    console.log(x - y);
}

function multiply(x , y){
    console.log(x * y);
}

function divide(x , y){
    console.log(x / y);
}

//add()
//subtract()
//multiply()
//divide()
