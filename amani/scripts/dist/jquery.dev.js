"use strict";

// Textwriting function for main intro header
var intro = document.getElementById("intro");
var txt = "Amani Partners";
var i = 0;
var intervalId = setInterval(function () {
  intro.innerHTML += txt[i];
  i++;

  if (i === txt.length) {
    clearInterval(intervalId);
  }
}, 100); // Textwriting function for slogan below the header

var slogan = document.getElementById("slogan");
var txt2 = "Serving and Growing Underserved Communities in Kenya";
var f = 0;
var intervalId2 = setInterval(function () {
  slogan.innerHTML += txt2[f];
  f++;

  if (f === txt2.length) {
    clearInterval(intervalId2);
  }
}, 100);