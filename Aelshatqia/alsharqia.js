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

let home = document.getElementById("home");
home.addEventListener("click", function () {
  window.location.href = "../Home.html";;
});