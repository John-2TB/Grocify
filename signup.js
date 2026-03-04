const nameInput = document.getElementById('name');
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const signupBtn = document.getElementById("signupBtn");
const passwordReport = document.getElementById("passwordReport");

const nameInputValue = nameInput.value()

passwordReport.classList.add("text-red-600")

signupBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (passwordValue !== confirmPasswordValue) {
    passwordReport.textContent = "Password don't match. Please try again.";
    return;
  } 
  
  if (passwordValue.length <8) {
    passwordReport.textContent = "Password must at least contain 8 characters.";
    return;
  }

  passwordReport.textContent = "";

  //User object
  const user = {
    userName: nameInputValue,
    email: emailValue,
    password: passwordValue
  }

  //store in local storage
  localStorage.setItem('user', JSON.stringify(user));

  //Redirect
  window.location.href = "login.html"

});