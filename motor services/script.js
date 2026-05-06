// REGISTER
function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  localStorage.setItem("loggedIn", "true");

  alert("Registered successfully!");
  window.location.href = "index.html"; // 👉 HOME
}

// LOGIN
function login() {
  let user = document.getElementById("logUser").value;
  let pass = document.getElementById("logPass").value;

  let storedUser = localStorage.getItem("user");
  let storedPass = localStorage.getItem("pass");

  if (user === "admin" && pass === "admin123") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("role", "admin");
    window.location.href = "index.html"; // 👉 HOME
  }
  else if (user === storedUser && pass === storedPass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("role", "user");
    window.location.href = "index.html"; // 👉 HOME
  }
  else {
    alert("Invalid login!");
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}