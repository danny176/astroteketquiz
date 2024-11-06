//Array som gemmer forside elementer når slideknap bliver klikket. Bliver gjort ved at tilføje gemforside class som har opacity 0 værdi.
document.querySelector(".slideknap").addEventListener("click", function () {
  const gemForside = [
    document.querySelector(".headline"),
    document.querySelector(".planets"),
    document.querySelector(".rummand"),
    document.querySelector(".raket"),
    document.querySelector(".startknap"),
  ];

  gemForside.forEach((element) => {
    element.classList.toggle("gemforside");
  });
});

//Hvis forside elementer når lukknap bliver klikket
document.querySelector(".lukknap").addEventListener("click", function () {
  const gemForside = [
    document.querySelector(".headline"),
    document.querySelector(".planets"),
    document.querySelector(".rummand"),
    document.querySelector(".raket"),
    document.querySelector(".startknap"),
  ];

  gemForside.forEach((element) => {
    element.classList.toggle("gemforside");
  });
});

//Slide in infografik når slideknap bliver klikket. Derudover gem slideknap og vis i stedet lukknap. Ekstra tilføjelse af rummand og rakket, for at modvirke opacity ikke virker begrund af den har en animation som bruger værdien. Jeg siger derfor at den skal sættes til display: none ved klik på slideknap og omvendt ved lukknap
const slidingImage = document.querySelector(".sliding-billede");
const slideKnap = document.querySelector(".slideknap");
const lukKnap = document.querySelector(".lukknap");
const lukRaket = document.querySelector(".raket");
const lukRummand = document.querySelector(".rummand");

slideKnap.addEventListener("click", function () {
  slideKnap.style.display = "none";
  lukKnap.style.display = "block";
  slidingImage.classList.add("slide-in");
  lukRaket.style.display = "none";
  lukRummand.style.display = "none";
});

//Slide ud infografik når lukknap bliver trykket. Derudover gem lukknap og vis i stedet slideknap

lukKnap.addEventListener("click", function () {
  lukKnap.style.display = "none";
  slideKnap.style.display = "block";
  slidingImage.classList.remove("slide-in");
  lukRaket.style.display = "block";
  lukRummand.style.display = "block";
});
