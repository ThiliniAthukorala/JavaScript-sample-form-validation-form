function  validate(){
    var isValid=true;
    alert(document.getElementById("idTxtName").value);

    if(document.getElementById("idTxtName").value==""){
        isValid=false;
        document.getElementById("nameSpan").innerHTML="Please enter a name...!"
        document.getElementById("nameSpan").style.color="red";
    }else{

    }
    return isValid;
}

function reset(){
    document.getElementById("nameSpan").innerHTML="";
}



