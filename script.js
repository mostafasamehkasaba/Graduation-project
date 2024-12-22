let userName = document.getElementById("userName");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

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
