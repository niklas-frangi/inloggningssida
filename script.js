//skapar en ny div + knapp när namn och kod stämmer
let inloggad = document.createElement("div");
let loggaUtKnapp = document.createElement("button");
inloggad.id = "inloggadDiv";
inloggad.innerHTML = "<p>Du är inloggad</p>";
loggaUtKnapp.innerHTML = "Logga Ut"
inloggad.appendChild(loggaUtKnapp);
loggaUtKnapp.onclick = tbxTillStart;

//skapar sida vid fel
let felInloggning = document.createElement("div");
let försökIgen = document.createElement("button");
felInloggning.id = "felInloggingDiv";
felInloggning.innerHTML = "<p>Du är felInloggingDiv</p>";
försökIgen.innerHTML = "Försök Igen"
felInloggning.appendChild(försökIgen);
försökIgen.onclick = tbxTillStart;



// Gömmer den inloggade versionen av hemsidan och visar startsidan istället
function tbxTillStart(){
    document.getElementById("inloggadDiv").style.visibility="hidden";
    document.getElementById("startDiv").style.visibility="visible";
}


// Gömmer startDiv när knappen klickas och visar inloggad-div istället
function loggaIn(){
    document.body.appendChild(inloggad);
    document.getElementById("startDiv").style.visibility="hidden";
    document.getElementById("inloggadDiv").style.visibility="visible";
}

function validate() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
 }
    else if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
       }
    else if (password == "test" || password == "1234") {
        alert("wow, de funkar");
        return true;
       }

} 