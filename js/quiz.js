//HTML Elementer:
//Spørgsmålet
const spoergsmaalet = document.getElementById("spr");
//knapperne
const btn_korrekt = document.getElementById("korrekt");
const btn_forkert_et = document.getElementById("forkert_et");
const btn_forkert_to = document.getElementById("forkert_to");
const btn_forkert_tre = document.getElementById("forkert_tre");

//Alle spørgsmålene:
//Spørgsmål nr. 1 er også skrevet i HTML
//spr 1
const spr1 = "Hvordan blev solen dannet?";

const spr1_korrekt = "I en stjernetåge";
const spr1_forkert_et = "Ved en eksplosion";
const spr1_forkert_to = "Ved kollision";
const spr1_forkert_tre = "Det er uvist";

//spr 2
const spr2 = "Hvilken farve er de varmeste stjerner?";

const spr2_forkert_et = "Grønne";
const spr2_korrekt = "Blå";
const spr2_forkert_to = "Røde";
const spr2_forkert_tre = "Gule";

//spr 3
const spr3 = "Hvad er en supernova?";

const spr3_forkert_et = "En måde stjernene bevæger sig på";
const spr3_forkert_to = "Når en planet bliver opslugt af et sort hul";
const spr3_korrekt = "En overmoden stjerne, der ekploderer";
const spr3_forkert_tre = "Når en komet rammer en stjerne";

//spr 4
const spr4 = "Hvordan kan et sort hul opstå?";

const spr4_forkert_et = "Det er uvist";
const spr4_forkert_to = "Når en planet eksploderer";
const spr4_forkert_tre = "Hvis to måner kolliderer";
const spr4_korrekt ="Ved en supernovaeksplosion";

//spr 5 
const spr5 = "Hvad gør et sort hul?";

const spr5_korrekt = "Det opsluger alt i nærheden";
const spr5_forkert_to = "Udsender lys igennem rummet";
const spr5_forkert_et = "Omdanner materialer til nye stjerner";
const spr5_forkert_tre = "Hjælper galaxer med at undgå at smelte sammen";

//spr 6
const spr6 = "Hvad er en exoplanet?";

const spr6_forkert_et = "En planet, der konstant skifter størrelse og farve";
const spr6_forkert_to = "En planet, der er ældre end solen";
const spr6_korrekt = "En planet, der kredser om andre stjerner end solen";
const spr6_forkert_tre = "En planet, der er halvt stjerne halvt komet";

//spr 7
const spr7 = "På hvilken planet er en l. mælk tungest?";

const spr7_forkert_et = "Mars";
const spr7_korrekt = "Jupiter";
const spr7_forkert_to = "Jorden";
const spr7_forkert_tre = "Uranus";

//spr 8
const spr8 = "Hvor lang tid tager det månen, at kredse rundt om jorden?";

const spr8_forkert_et = "30,1 dage";
const spr8_forkert_to = "60,5 dage";
const spr8_korrekt = "27,3 dage";
const spr8_forkert_tre = "12,7 dage";

//spr 9
const spr9 = "Hvor mange jorddøgn er der på et døgn på Venus?";

const spr9_forkert_et = "321 jordøgn";
const spr9_forkert_to = "75 jorddøgn";
const spr9_forkert_tre =  "5 jorddøgn";
const spr9_korrekt = "243 jorddøgn";

//spr 10
const spr10 = "Hvad er en meteorit";

const spr10_forkert_et = "En partikel fra et sort hul";
const spr10_korrekt = "Rester fra solsystemests dannelse";
const spr10_forkert_to = "Rester fra en satelit";
const spr10_forkert_tre = "En samling af stjerner";


const scoreDisplay = document.getElementById("score");


let score = 0;
let nuvaerendeStep = 1;

function opdaterScore() {
    document.getElementById("score").innerText = `${score}/10`;
}



// Event listeners:

btn_korrekt.addEventListener("click", function () {
    score++; // Øg scoren kun ved korrekt svar
    opdaterScore(); // Opdater visningen af scoren
    videreispr(); // Gå videre til næste spørgsmål
});

btn_forkert_et.addEventListener("click", videreispr);
btn_forkert_to.addEventListener("click", videreispr);
btn_forkert_tre.addEventListener("click", videreispr);

function videreispr (){
    if(nuvaerendeStep == 1){
        nuvaerendeStep++;
        //teksten til spr2:
        spoergsmaalet.innerHTML = spr2;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr2_korrekt;
        btn_forkert_et.innerHTML = spr2_forkert_et;
        btn_forkert_to.innerHTML = spr2_forkert_to;
        btn_forkert_tre.innerHTML = spr2_forkert_tre;

        document.getElementById("raketderflyver").style.left = "320px";
         
    }else if(nuvaerendeStep == 2){
        nuvaerendeStep++;
        //teksten til spr3:
        spoergsmaalet.innerHTML = spr3;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr3_korrekt;
        btn_forkert_et.innerHTML = spr3_forkert_et;
        btn_forkert_to.innerHTML = spr3_forkert_to;
        btn_forkert_tre.innerHTML = spr3_forkert_tre;
        document.getElementById("raketderflyver").style.left = "392px";

    }else if(nuvaerendeStep == 3){
        nuvaerendeStep++;
        //teksten til spr4:
        spoergsmaalet.innerHTML = spr4;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr4_korrekt;
        btn_forkert_et.innerHTML = spr4_forkert_et;
        btn_forkert_to.innerHTML = spr4_forkert_to;
        btn_forkert_tre.innerHTML = spr4_forkert_tre;
        document.getElementById("raketderflyver").style.left = "464px";

    }else if(nuvaerendeStep == 4){
        nuvaerendeStep++;
        //teksten til spr4:
        spoergsmaalet.innerHTML = spr5;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr5_korrekt;
        btn_forkert_et.innerHTML = spr5_forkert_et;
        btn_forkert_to.innerHTML = spr5_forkert_to;
        btn_forkert_tre.innerHTML = spr5_forkert_tre;
        document.getElementById("raketderflyver").style.left = "536px";

    }else if(nuvaerendeStep == 5){
        nuvaerendeStep++;
        //teksten til spr4:
        spoergsmaalet.innerHTML = spr6;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr6_korrekt;
        btn_forkert_et.innerHTML = spr6_forkert_et;
        btn_forkert_to.innerHTML = spr6_forkert_to;
        btn_forkert_tre.innerHTML = spr6_forkert_tre;
        document.getElementById("raketderflyver").style.left = "608px";

    }else if(nuvaerendeStep == 6){
        nuvaerendeStep++;
        //teksten til spr4:
        spoergsmaalet.innerHTML = spr7;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr7_korrekt;
        btn_forkert_et.innerHTML = spr7_forkert_et;
        btn_forkert_to.innerHTML = spr7_forkert_to;
        btn_forkert_tre.innerHTML = spr7_forkert_tre;
        document.getElementById("raketderflyver").style.left = "680px";

    }else if(nuvaerendeStep == 7){
        nuvaerendeStep++;
        //teksten til spr4:
        spoergsmaalet.innerHTML = spr8;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr8_korrekt;
        btn_forkert_et.innerHTML = spr8_forkert_et;
        btn_forkert_to.innerHTML = spr8_forkert_to;
        btn_forkert_tre.innerHTML = spr8_forkert_tre;
        document.getElementById("raketderflyver").style.left = "752px";

    }else if(nuvaerendeStep == 8){
        nuvaerendeStep++;
        //teksten til spr4:
        spoergsmaalet.innerHTML = spr9;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr9_korrekt;
        btn_forkert_et.innerHTML = spr9_forkert_et;
        btn_forkert_to.innerHTML = spr9_forkert_to;
        btn_forkert_tre.innerHTML = spr9_forkert_tre;
        document.getElementById("raketderflyver").style.left = "824px";

    }else if(nuvaerendeStep == 9){
        nuvaerendeStep++;
        //teksten til spr4:
        spoergsmaalet.innerHTML = spr10;
        //knappernes indhold:
        btn_korrekt.innerHTML = spr10_korrekt;
        btn_forkert_et.innerHTML = spr10_forkert_et;
        btn_forkert_to.innerHTML = spr10_forkert_to;
        btn_forkert_tre.innerHTML = spr10_forkert_tre;
        document.getElementById("raketderflyver").style.left = "896px";

    }

};


























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
  