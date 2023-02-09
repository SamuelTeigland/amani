// Textwriting function for main intro header
const intro = document.getElementById("intro");

const txt = "Amani Partners";

let i = 0;

const intervalId = setInterval(function () {
  intro.innerHTML += txt[i];
  i++;
  if (i === txt.length) {
    clearInterval(intervalId);
  }
}, 100);

// Textwriting function for slogan below the header
const slogan = document.getElementById("slogan");

const txt2 = "Serving and Growing Underserved Communities in Kenya";

let f = 0;

const intervalId2 = setInterval(function () {
  slogan.innerHTML += txt2[f];
  f++;
  if (f === txt2.length) {
    clearInterval(intervalId2);
  }
}, 100);