let users = JSON.parse(localStorage.getItem("daponUsers")) || {};
let loginOTP = "";

function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const status = document.getElementById("regStatus");

  if (!username || !password || !phone) {
    status.textContent = "All fields are required."; return;
  }

  if (users[username]) {
    status.textContent = "Username already exists."; return;
  }

  users[username] = { password, phone };
  localStorage.setItem("daponUsers", JSON.stringify(users));
  status.textContent = "Registered successfully. Please log in.";
}

function sendLoginOTP() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const status = document.getElementById("loginStatus");

  if (!users[username] || users[username].password !== password) {
    status.textContent = "Invalid credentials."; return;
  }

  loginOTP = Math.floor(100000 + Math.random() * 900000).toString();
  document.getElementById("loginOtpDisplay").textContent = loginOTP;
  document.getElementById("otpArea").style.display = "block";
  status.textContent = "";
}

function verifyLogin() {
  const otpEntered = document.getElementById("loginOtpInput").value.trim();
  const status = document.getElementById("loginStatus");

  if (otpEntered === loginOTP) {
    const username = document.getElementById("loginUsername").value.trim();
    localStorage.setItem("daponUser", username);
    window.location.href = "index.html";
  } else {
    status.textContent = "Incorrect OTP.";
  }
}