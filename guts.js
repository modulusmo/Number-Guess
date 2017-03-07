// JavaScript File
var basenum;
newNumber();

function compare(){
    var unum=document.getElementById("numinput").value;
    var response = document.getElementById("response");
    if (unum==basenum)
        response.innerHTML="You got it!";
    else if (unum<basenum)
        response.innerHTML="Too Low!";
    else
        response.innerHTML="Too High!";
}

function newNumber() {
    basenum= Math.floor((Math.random()*10)+1);
}