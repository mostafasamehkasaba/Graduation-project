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
moon.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

let btnone = document.getElementById("btnOne");
let btntwo = document.getElementById("btnTwo");
let btnthree = document.getElementById("btnThree");
btnone.addEventListener("click", function () {
  window.location.href = "../red-sea/placeOne/index.html";
});
btntwo.addEventListener("click", function () {
  window.location.href = "../red-sea/placeTwo/index.html";
});
btnthree.addEventListener("click", function () {
  window.location.href = "../red-sea/placeThree/index.html";
});