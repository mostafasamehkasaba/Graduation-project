document.addEventListener("DOMContentLoaded", function () {
  let userName = document.getElementById("userName");
  let password = document.getElementById("password");
  let btn = document.getElementById("btn");

  if (btn) {
    btn.addEventListener("click", function () {
      if (userName.value === "" || password.value === "") {
        alert("Please fill in all fields!");
        return;
      }

      localStorage.setItem("userName", userName.value);
      localStorage.setItem("password", password.value);

      userName.value = "";
      password.value = "";

      setTimeout(function () {
        window.location.href = "index.html";
      }, 1000);
    });
  }
});

var sun = document.getElementById("light");
var moon = document.getElementById("dark");
var body = document.body;

sun.onclick = function changee() {
  sun.style.display = "none";
  moon.style.display = "block";
  body.style.backgroundColor = "white";
};

moon.onclick = function restore() {
  body.style.backgroundColor = "#181C14";
  moon.style.display = "none";
  sun.style.display = "block";
};
