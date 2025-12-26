// Check if user is logged in
const user = localStorage.getItem("loggedInUser");

if (!user) {
  // Not logged in → redirect to login
  window.location.href = "login.html";
} else {
  // Logged in → show dashboard
  document.getElementById("welcome").textContent =
    "Welcome to Dashboard, " + user;
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
