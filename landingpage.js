const welcomeText = document.getElementById('welcomeText');
const storedData = localStorage.getItem('user');
const user = JSON.parse(storedData);

welcomeText.textContent = "Welcome, " + user.userName.trim().split(/\s+/)[0];
welcomeText.classList.add("text-2xl", "font-bold")


if (localStorage.getItem('isLoggedIn') !== "true") {
  window.location.href ='login.html'
}