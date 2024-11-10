// HTML Elementer
//spørgsmålene
const spoergsmaalet = document.getElementById("spr");
// Knapperne
const btn_korrekt = document.getElementById("korrekt");
const btn_forkert_et = document.getElementById("forkert_et");
const btn_forkert_to = document.getElementById("forkert_to");
const btn_forkert_tre = document.getElementById("forkert_tre");

// Spørgsmål og svarmuligheder (som arrays)
const spoergsmaal = [
    { spm: "Hvordan blev solen dannet?", korrekt: "I en stjernetåge", forkert: ["Ved en eksplosion", "Ved kollision", "Det er uvist"] },
    { spm: "Hvilken farve er de varmeste stjerner?", korrekt: "Blå", forkert: ["Grønne", "Røde", "Gule"] },
    { spm: "Hvad er en supernova?", korrekt: "En overmoden stjerne, der ekploderer", forkert: ["En måde stjernerne bevæger sig på", "Når en planet bliver opslugt af et sort hul", "Når en komet rammer en stjerne"] },
    { spm: "Hvordan kan et sort hul opstå?", korrekt: "Ved en supernovaeksplosion", forkert: ["Det er uvist", "Når en planet eksploderer", "Hvis to måner kolliderer"] },
    { spm: "Hvad gør et sort hul?", korrekt: "Det opsluger alt i nærheden", forkert: ["Udsender lys igennem rummet", "Omdanner materialer til nye stjerner", "Hjælper galakser med at undgå at smelte sammen"] },
    { spm: "Hvad er en exoplanet?", korrekt: "En planet, der kredser om andre stjerner end solen", forkert: ["En planet, der konstant skifter størrelse og farve", "En planet, der er ældre end solen", "En planet, der er halvt stjerne halvt komet"] },
    { spm: "På hvilken planet er en l. mælk tungest", korrekt: "Jupiter", forkert: ["Mars", "Jorden", "Uranus"] },
    { spm: "Hvor lang tid tager det månen, at kredse rundt om jorden", korrekt: "27,3 dage", forkert: ["30,1 dage", "60,5 dage", "12,7 dage"] },
    { spm: "Hvor mange jorddøgn er der på ét døgn på Venus?", korrekt: "243 jorddøgn", forkert: ["75 jorddøgn", "321 jorddøgn", "5 jorddøgn"] },
    { spm: "Hvad er en meteorit?", korrekt: "Rester fra solsystemests dannelse", forkert: ["En partikel fra et sort hul", "Rester fra en satelit", "En samling af stjerner"] },
];

// Variabler til score og nuværende trin
let nuvaerendeStep = 0;
let score = 0;

// Funktion til at gå videre mellem spørgsmål spørgsmål og svarmuligheder
function opdaterSpoergsmaal() {
    if (nuvaerendeStep < spoergsmaal.length) {
        const aktueltSpoergsmaal = spoergsmaal[nuvaerendeStep];
        spoergsmaalet.innerHTML = aktueltSpoergsmaal.spm;
        
        // Bland svarmulighederne
        const svarmuligheder = [aktueltSpoergsmaal.korrekt, ...aktueltSpoergsmaal.forkert].sort(() => Math.random() - 0.5);
        btn_korrekt.innerHTML = svarmuligheder[0];
        btn_forkert_et.innerHTML = svarmuligheder[1];
        btn_forkert_to.innerHTML = svarmuligheder[2];
        btn_forkert_tre.innerHTML = svarmuligheder[3];
    } else {
        afslutQuiz();
    }
}

// Funktion til at afslutte quizzen og gå til resultatssiden


    function afslutQuiz() {
        localStorage.setItem("quizScore", score); // Gem scoren i localStorage
    
        if (score === 10) {
            window.location.href = "vinderside.html"; // Naviger til perfekt score-siden, hvis scoren er 10
        } else {
            window.location.href = "loserside.html"; // Naviger til den generelle resultatside, hvis scoren er under 10
        }
    }

// Funktion til at håndtere klik på svarknapperne
function haandterSvar(erKorrekt) {
    if (erKorrekt) score++; // Hvis svaret er korrekt, øges scoren med 1
    nuvaerendeStep++; // Gå til næste spørgsmål 
    opdaterSpoergsmaal(); // Opdater spørgsmål og svarmuligheder
}

// Event listeners til svarknapperne
btn_korrekt.addEventListener("click", () => haandterSvar(true));
btn_forkert_et.addEventListener("click", () => haandterSvar(false));
btn_forkert_to.addEventListener("click", () => haandterSvar(false));
btn_forkert_tre.addEventListener("click", () => haandterSvar(false));

// Start quizzen med det første spørgsmål
opdaterSpoergsmaal();


















//Array som gemmer forside elementer når slideknap bliver klikket. Bliver gjort ved at tilføje gemforside class som har opacity 0 værdi.
document.querySelector(".slideknap").addEventListener("click", function () {
    const gemQuiz = [
      document.querySelector(".lukknapforside"),
      document.querySelector("#svarmulighederne_et"),
      document.querySelector("#svarmulighederne_to"),
      document.querySelector("#korrekt"),
      document.querySelector(".forkert"),
      document.querySelector(".pilknapperne"),
      document.querySelector("#planeterne"),
    ];
  
    gemQuiz.forEach((element) => {
      element.classList.toggle("gemquiz");
    });
  });
  
  //Hvis forside elementer når lukknap bliver klikket
  document.querySelector(".lukknap").addEventListener("click", function () {
    const gemQuiz = [
        document.querySelector(".lukknapforside"),
        document.querySelector("#svarmulighederne_et"),
        document.querySelector("#svarmulighederne_to"),
        document.querySelector("#korrekt"),
        document.querySelector(".forkert"),
        document.querySelector(".pilknapperne"),
        document.querySelector("#planeterne"),
    ];
  
    gemQuiz.forEach((element) => {
      element.classList.toggle("gemquiz");
    });
  });
  
  //Slide in infografik når slideknap bliver klikket. Derudover gem slideknap og vis i stedet lukknap.
  const slidingImage = document.querySelector(".sliding-billede");
  const slideKnap = document.querySelector(".slideknap");
  const lukKnap = document.querySelector(".lukknap");
  
  slideKnap.addEventListener("click", function () {
    slideKnap.style.display = "none";
    lukKnap.style.display = "block";
    slidingImage.classList.add("slide-in");
  });
  
  //Slide ud infografik når lukknap bliver trykket. Derudover gem lukknap og vis i stedet slideknap
  
  lukKnap.addEventListener("click", function () {
    lukKnap.style.display = "none";
    slideKnap.style.display = "block";
    slidingImage.classList.remove("slide-in");
  });
  