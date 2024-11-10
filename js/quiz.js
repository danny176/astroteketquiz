// Henter HTML-elementer
const spoergsmaalet = document.getElementById("spr");
const btn_korrekt = document.getElementById("korrekt");
const btn_forkert_et = document.getElementById("forkert_et");
const btn_forkert_to = document.getElementById("forkert_to");
const btn_forkert_tre = document.getElementById("forkert_tre");

const buttons = [btn_korrekt, btn_forkert_et, btn_forkert_to, btn_forkert_tre];

const pilmodvenstre = document.getElementById("pilmodvenstre");
const pilmodhøjre = document.getElementById("pilmodhøjre");

// Variabler
let score = 0;
let nuvaerendeStep = 0;
let userAnswers = []; // Array til at gemme brugerens svar (hvilket svar der blev valgt)

// Array med spørgsmål og svarmuligheder 0, 1, 2, 3 indexer
const quizData = [
    {
        question: "Hvordan blev solen dannet?",
        options: ["I en stjernetåge", "Ved en eksplosion", "Ved kollision", "Det er uvist"],
        correct: 0
    },
    {
        question: "Hvilken farve er de varmeste stjerner?",
        options: ["Grønne", "Blå", "Røde", "Gule"],
        correct: 1
    },
    {
        question: "Hvad er en supernova?",
        options: ["En måde stjernerne bevæger sig på", "Når en planet bliver opslugt af et sort hul", "En overmoden stjerne, der eksploderer", "Når en komet rammer en stjerne"],
        correct: 2
    },
    {
        question: "Hvordan kan et sort hul opstå?",
        options: ["Det er uvist", "Når en planet eksploderer", "Hvis to måner kolliderer", "Ved en supernovaeksplosion"],
        correct: 3
    },
    {
        question: "Hvad gør et sort hul?",
        options: ["Det opsluger alt i nærheden", "Udsender lys igennem rummet", "Omdanner materialer til nye stjerner", "Hjælper galakser med at undgå at smelte sammen"],
        correct: 0
    },
    {
        question: "Hvad er en exoplanet?",
        options: ["En planet, der konstant skifter størrelse og farve", "En planet, der er ældre end solen", "En planet, der kredser om andre stjerner end solen", "En planet, der er halvt stjerne halvt komet"],
        correct: 2
    },
    {
        question: "På hvilken planet er en liter mælk tungest?",
        options: ["Mars", "Jupiter", "Jorden", "Uranus"],
        correct: 1
    },
    {
        question: "Hvor lang tid tager det månen at kredse rundt om jorden?",
        options: ["30,1 dage", "60,5 dage", "27,3 dage", "12,7 dage"],
        correct: 2
    },
    {
        question: "Hvor mange jorddøgn er der på et døgn på Venus?",
        options: ["321 jorddøgn", "75 jorddøgn", "5 jorddøgn", "243 jorddøgn"],
        correct: 3
    },
    {
        question: "Hvad er en meteorit?",
        options: ["En partikel fra et sort hul", "Rester fra solsystemets dannelse", "Rester fra en satellit", "En samling af stjerner"],
        correct: 1
    }
];

// Tilføjer event listeners til knapperne
buttons.forEach((button, index) => {
    button.addEventListener("click", () => checkAnswer(index));
});

// til pilene
pilmodvenstre.addEventListener("click", goBack);
pilmodhøjre.addEventListener("click", goForward);

function checkAnswer(selectedIndex) {
    // Tjekker om det valgte svar er korrekt
    if (selectedIndex === quizData[nuvaerendeStep].correct) {
        score++;
    }

    // Gemmer brugerens svar
    userAnswers[nuvaerendeStep] = selectedIndex;

    // Farvesætter svarene (grøn for korrekt, rød for forkert)
    updateButtonColors();

    // Gå videre til næste spørgsmål efter en kort forsinkelse (1 sekund) - brugeren kan se om de har svaret rigtigt eller forkert
    setTimeout(() => {
        nuvaerendeStep++;
        if (nuvaerendeStep < quizData.length) {
            loadQuestion();
        } else {
            checkAndDisplayResults();
        }
    }, 700); // 700 millisekunder = 0,7 sekund
}

//pil tilbage
function goBack() {
    if (nuvaerendeStep > 0) {
        nuvaerendeStep--;
        loadQuestion();
    }
}

//pil frem
function goForward() {
    if (nuvaerendeStep < quizData.length - 1) {
        nuvaerendeStep++;
        loadQuestion();
    }
}

function updateButtonColors() {
    // Sætter knappernes farve baseret på tidligere valg - så den forbliver når man går frem og tilbage mellem spørgsmålene
    buttons.forEach((button, index) => {
        if (userAnswers[nuvaerendeStep] === index) {
            if (index === quizData[nuvaerendeStep].correct) {
                button.style.backgroundColor = 'green'; // Korrekt svar
            } else {
                button.style.backgroundColor = 'red'; // Forkert svar
            }
        } else {
            button.style.backgroundColor = ''; // Reset farven for ikke-valgte knapper
        }
    });
}

function loadQuestion() {
    // Sætter det nuværende spørgsmål
    spoergsmaalet.innerHTML = quizData[nuvaerendeStep].question;

    // Opdaterer knapteksterne med svarmulighederne
    quizData[nuvaerendeStep].options.forEach((option, index) => {
        buttons[index].innerHTML = option;
    });

    // Opdaterer knappernes farver (i tilfælde af navigering tilbage med pilene)
    updateButtonColors();

    // Flytter raketten frem når man går et sprøgsmål frem starter ved 248 px og rykker 72 px pr gang
    document.getElementById("raketderflyver").style.left = `${248 + (72 * nuvaerendeStep)}px`;
}

// Tjekker og sender til vinder side, hvis score = 10/10 og loser siden, hvis score er 9/10 eller mindre
function checkAndDisplayResults() {
    // Gem scoren i localStorage så vi kan bruge den på loser siden
    localStorage.setItem("score", score);

    // Gå til vindersiden eller losersiden baseret på scoren
    if (score === 10) {
        window.location.href = "vinderside.html";
    } else {
        window.location.href = "loserside.html";
    }
}

// Initialiserer første spørgsmål
loadQuestion();






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
  