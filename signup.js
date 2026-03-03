const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const signupBtn = document.getElementById("signupBtn");
const passwordReport = document.getElementById("passwordReport");

signupBtn.addEventListener("click", function() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (passwordValue !== confirmPasswordValue) {
    passwordReport.textContent = "Password don't match. Please try again";
    passwordReport.classList.add("text-red-600")
  } if (passwordValue.length !== 8) {
    passwordReport
  } else {
    
  }

})