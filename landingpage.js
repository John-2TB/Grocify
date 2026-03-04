if (localStorage.getItem('isLoggedIn') !== "true") {
  window.location.href ='login.html'
}

const welcomeText = document.getElementById('welcomeText');
const storedData = localStorage.getItem('user');

if (!storedData) {
  window.location.href = "login.html";
}

const user = JSON.parse(storedData);

const now = new Date();
const hour = now.getHours();

let greeting;

if (hour < 12) {
  greeting = "Good Morning 🌞";
} else if (hour < 18) {
  greeting = "Good Afternoon 🌤";
} else {
  greeting = "Good Evening 🌙";
}

welcomeText.textContent = greeting + ", " + user.userName.trim().split(/\s+/)[0];

