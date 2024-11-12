// Hent scoren fra localStorage
const score = localStorage.getItem("score");

// Vis scoren på siden
const scoreDisplay = document.getElementById("scoreDisplay");
if (score !== null) {
    scoreDisplay.textContent = `${score}/10`; // skriver scoren på loser siden
} else {
   scoreDisplay.textContent = "Ingen score fundet."; //skrives bare, hvis der ingen localstorage gemt er.
}

//Sætter en timeout til forsiden, så at score siden ikke bliver stående og folk ikke kan se hvad formålet er.

setTimeout(() => {
    window.location.href = "index.html";
  }, 60000);
  
