let button_ = document.getElementById("szamit");

button_.addEventListener("click", function() {
    var a = document.getElementById("ao").value;
    var b = document.getElementById("bo").value;
    document.getElementById("kerulet").innerHTML= a*2+b*2;
});



