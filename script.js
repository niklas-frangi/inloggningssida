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
felInloggning.innerHTML = "<p>Fel användarnamn eller lösenord</p>";
försökIgen.innerHTML = "Försök Igen"
felInloggning.appendChild(försökIgen);
försökIgen.onclick = tbxFrånFel;


function tbxFrånFel(){
    document.getElementById("felInloggingDiv").style.visibility="hidden";
    document.getElementById("startDiv").style.visibility="visible";
}


// Gömmer den inloggade versionen av hemsidan och visar startsidan istället
function tbxTillStart(){
    document.getElementById("inloggadDiv").style.visibility="hidden";
    document.getElementById("startDiv").style.visibility="visible";
}


// Gömmer startDiv när knappen klickas och visar inloggad-div istället
// och nollställer värderna på namn- och lösenordsfältet.
function loggaIn(){
    document.body.appendChild(inloggad);
    document.getElementById("startDiv").style.visibility="hidden";
    document.getElementById("inloggadDiv").style.visibility="visible";
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
}

// Kollar om namn och kod stämmer eller inte och kör respektive function
function validate() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;   
    if (username== "test" && password == "1234") {
        loggaIn();
       }
    else{
        document.getElementById("startDiv").style.visibility="hidden";        
        document.body.appendChild(felInloggning);     
        document.getElementById("felInloggingDiv").style.visibility="visible";   
        document.getElementById("userName").value = "";
        document.getElementById("password").value = "";
    }
} 