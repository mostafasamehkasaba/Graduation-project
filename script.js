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

    document.addEventListener("DOMContentLoaded", function () {
      let carousel = new bootstrap.Carousel(
        document.getElementById("carouselExampleCaptions"),
        {
          interval: 3000,
          pause: "hover",
          wrap: true, 
          touch: true,
        }
      );
      document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          carousel.next();
        } else if (event.key === "ArrowLeft") {
          carousel.prev();
        }
      });
    });

let cairo = document.getElementById("cairo");
let giza = document.getElementById("giza");
let Fayoum = document.getElementById("Fayoum");
let BeniSuef = document.getElementById("Beni_Suef");
let Minya = document.getElementById("Minya");
let Assiut = document.getElementById("Assiut");
let Sohag = document.getElementById("Sohag");
let Qena = document.getElementById("Qena");
let Luxor = document.getElementById("Luxor");
let Aswan = document.getElementById("Aswan");
let RedSea = document.getElementById("Red_Sea");
let NewValley = document.getElementById("New_Valley");
let Matrouh = document.getElementById("Matrouh");
let Alexandria = document.getElementById("Alexandria");
let TheLake = document.getElementById("The_Lake");
let Alsharqia = document.getElementById("Alsharqia");
let South_Sinaia = document.getElementById("South_Sinaia");
let redsea= document.getElementById("red-sea");