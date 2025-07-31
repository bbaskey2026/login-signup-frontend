function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const msg = document.getElementById("signupMsg");

  if (username && password) {
    localStorage.setItem(username, password);
    msg.textContent = "Signup successful! Redirecting to login...";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  } else {
    msg.textContent = "All fields are required.";
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMsg");

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    localStorage.setItem("loggedInUser", username);
    msg.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    msg.textContent = "Invalid credentials.";
  }
}
