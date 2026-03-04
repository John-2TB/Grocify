const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const signupBtn = document.getElementById("signupBtn");
const passwordReport = document.getElementById("passwordReport");

passwordReport.classList.add("text-red-600")

signupBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (passwordValue !== confirmPasswordValue) {
    passwordReport.textContent = "Password don't match. Please try again";
    
  } if (passwordValue.length < 8) {
    passwordReport.textContent = "Password must at least contain 8 characters"
  } else {
    window.location.href = ""
  }

});