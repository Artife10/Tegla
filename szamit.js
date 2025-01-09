let button_ = document.getElementById("szamit");

button_.addEventListener("click", function() {
    var a = document.getElementById("ao").value;
    var b = document.getElementById("bo").value;
    

    if (a == "" || b == "") {
        document.getElementById("kerulet").innerHTML = "Nem adtál meg minden adatot!";
        
    }
    else{
        document.getElementById("kerulet").innerHTML= a*2+b*2;
    }
});



