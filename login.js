const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const loginReport = document.getElementById('loginReport');

loginReport.classList.add("text-red-600");

login.addEventListener('click', function(e) {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const storedData = localStorage.getItem('user');
  
  if (!storedData) {
    loginReport.textContent = "User not found. Please sign up."
    return;
  }

  const user = JSON.parse(storedData);

  if (emailValue === user.email && passwordValue === user.password) {
    loginReport.textContent = "";
    window.location.href = "landingpage.html"
    localStorage.setItem("isLoggedIn", "true")
  } else {
    loginReport.textContent = "Invalid email or password";
  }
});



