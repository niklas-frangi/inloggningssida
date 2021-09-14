//skapar en ny div och knapp som används vid rätt inlogging
let inloggad = document.createElement("div");
let loggaUtKnapp = document.createElement("button");
inloggad.id = "inloggadDiv";
inloggad.innerHTML = "<p>Du är inloggad</p>";
loggaUtKnapp.innerHTML = "Logga Ut"
inloggad.appendChild(loggaUtKnapp);
loggaUtKnapp.onclick = tbxTillStart;

//skapar en ny div och knapp som används vid fel inlogging
let felInloggning = document.createElement("div");
let försökIgen = document.createElement("button");
felInloggning.id = "felInloggingDiv";
felInloggning.innerHTML = "<p>Fel användarnamn eller lösenord</p>";
försökIgen.innerHTML = "Försök Igen"
felInloggning.appendChild(försökIgen);
försökIgen.onclick = tbxFrånFel;

// Gömmer sidan som visas vid fel inlogging och visar startsidan istället
function tbxFrånFel(){
    document.getElementById("felInloggingDiv").style.visibility="hidden";
    document.getElementById("startDiv").style.visibility="visible";
}


// Gömmer den inloggade versionen av hemsidan och visar startsidan istället
function tbxTillStart(){
    localStorage.clear();
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

// Hårdkodar lösenord in i variablarna namn och lösenord
let namn = "test";
let lösenord = "1234";

// Kollar om input.value är samma som variablarna namn och lösenord. Om de är det så loggas man in, annars visas felsidan
function verifiera() { 
    if(document.getElementById("userName").value === namn&& document.getElementById("password").value===lösenord){
        loggaIn();
        localStorage.setItem("inloggadAnvändare", "test");
    }
    else{
        document.getElementById("startDiv").style.visibility="hidden";        
        document.body.appendChild(felInloggning);     
        document.getElementById("felInloggingDiv").style.visibility="visible";   
        document.getElementById("userName").value = "";
        document.getElementById("password").value = "";
    }
} 



if (localStorage.getItem("inloggadAnvändare") === "test"){
    loggaIn();
    document.getElementById("startDiv").style.visibility="hidden";
    document.getElementById("inloggadDiv").style.visibility="visible";
}
