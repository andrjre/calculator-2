 
export let checkOperator = function(){

let operator;

if(document.getElementById("add").checked)
{
    operator = "add";
}
else if(document.getElementById("subtract").checked)
{
    operator = "subtract";
}
else if(document.getElementById("multiply").checked)
{
    operator = "multiply";
}
else if(document.getElementById("divide").checked)
{
    operator = "divide";
}
else
{
    console.log("error")
}

return operator;

};
