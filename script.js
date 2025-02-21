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

document.querySelectorAll(".fa-heart").forEach((heart) => {
  heart.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
