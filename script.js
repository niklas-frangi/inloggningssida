// Hårdkodar lösenord in i variablarna namn och lösenord
const namn = "test";
const lösenord = "1234";



// Skapar en div till startsidan
let startsida = document.createElement("div");
startsida.id = "startDiv";

// Skapar  ett input-fält för att skriva in användarnamn
let användarNamn = document.createElement("input")
användarNamn.placeholder = "Användarnamn"
användarNamn.type = "text";
användarNamn.id = "userName";

// Skapar ett input-fält för att skriva in användarnamn
let lösen = document.createElement("input")
lösen.placeholder = "Lösenord"
lösen.type = "password";
lösen.id = "password";

// Skapar knappen som används för att kunna logga in
let knappStart = document.createElement("button");
knappStart.innerHTML = "Logga in";
knappStart.onclick = function verifiera() {
    if(document.getElementById("userName").value === namn&& document.getElementById("password").value===lösenord){
        loggaIn();
        localStorage.setItem("inloggadAnvändare", "test");
    }
    else{  
        startDiv.remove();    
        document.body.appendChild(felInloggning);
    }
} 

// Bifogar båda input-fälten och knappen till den nyskapade diven "startsida"
startsida.appendChild(användarNamn);
startsida.appendChild(lösen);
startsida.appendChild(knappStart);



// Skapar en div som visas om man är inloggad
let inloggad = document.createElement("div");
inloggad.id = "inloggadDiv";
inloggad.innerHTML = "<p>Du är inloggad</p>";

// Skapar knappen som används för att kunna logga ut och rensa localStorage
let loggaUtKnapp = document.createElement("button");
loggaUtKnapp.innerHTML = "Logga ut"
loggaUtKnapp.onclick = tbxFrånInloggad;

// Bifogar logga ut-knappen till den nyskapade diven "inloggad"
inloggad.appendChild(loggaUtKnapp);



// Skapar en div som visas vid användarnamn eller kod
let felInloggning = document.createElement("div");
felInloggning.id = "felInloggingDiv";
felInloggning.innerHTML = "<p>Fel användarnamn eller lösenord</p>";

// Skapar knappen som används för att kunna ta sig tillbaka till startsidan
let försökIgen = document.createElement("button");
försökIgen.innerHTML = "Försök igen";
försökIgen.onclick = tbxFrånFel;

// Bifogar försök igen-knappen till den nyskapade diven "felInlogging"
felInloggning.appendChild(försökIgen);



// Bifogar startsidan till body och tar bort sidan som visas vid fel inlogging. Nollställer även värdet på användarnamn- och lösenordsfälten
function tbxFrånFel(){
    document.body.appendChild(startsida);
    felInloggning.remove();
    användarNamn.value = "";
    lösen.value = "";
}



// Rensar localStorage och sidan som visas när man är inloggad och bifogar istället startsidan samt nollställer värdet på användarnamn- och lösenordsfälten
function tbxFrånInloggad(){
    localStorage.clear(); 
    inloggad.remove();
    document.body.appendChild(startsida);
    användarNamn.value = "";
    lösen.value = "";
}



// Bifogar den inloggade sidan till body och tar bort startsidan
function loggaIn(){
    document.body.appendChild(inloggad);
    startDiv.remove();
}



// Om nyckeln "inloggadeAnvändare" i localStorage har värdet "test" så bifogas den inloggade sidan. Annars bifogas startsidan
if (localStorage.getItem("inloggadAnvändare") === "test"){
    document.body.appendChild(inloggad);
}
else {
    document.body.appendChild(startsida);
}
