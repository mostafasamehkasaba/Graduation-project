var sun = document.getElementById("light");
var moon = document.getElementById("dark");
var body = document.body;

sun.onclick = function () {
  sun.style.display = "none";
  moon.style.display = "flex";
  body.style.backgroundColor = "white";
  body.style.color = "black";
};

moon.onclick = function () {
  body.style.backgroundColor = "#181C14";
  body.style.color = "#EFF3EA";
  moon.style.display = "none";
  sun.style.display = "flex";
};

let btnSalahEldeen = document.getElementById("btnSalahEldeen");
btnSalahEldeen.addEventListener("click", function () { 
  window.open("../southsina/salaheldeen/index.html")
});

let Deersantctereen  = document.getElementById("btnDeersantctereen");
Deersantctereen.addEventListener("click", function () { 
  window.open("../southsina/DeerSantctereen/index.html")
});