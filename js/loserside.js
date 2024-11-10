const score = localStorage.getItem("quizScore");
const loserscore = document.getElementById("loserscore");

loserscore.innerHTML = `${score}/10`;