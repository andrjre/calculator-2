if(document.getElementById("add").checked)
{
    operatorChecked = "add";
}
else if(document.getElementById("subtract").checked)
{
    operatorChecked = "subtract";
}
else if(document.getElementById("multiply").checked)
{
    operatorChecked = "multiply";
}
else if(document.getElementById("divide").checked)
{
    operatorChecked = "divide";
}
else
{
    console.log("error")
}