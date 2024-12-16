let userName = document.getElementById("userName");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.onclick = function () {
  localStorage.setItem("userName", userName.value);
  localStorage.setItem("password", password.value);
  window.location.href = "index.html";
  userName.value = "";
};
