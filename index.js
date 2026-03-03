const signupBtn = document.getElementById('signupBtn');
const loginText = document.getElementById('loginText');

signupBtn.addEventListener('click', function() {
  if (loginText.classList.contains('hidden')) {
    loginText.classList.remove('hidden');
    signupBtn.textContent = 'Sign Up';
  } else {
    loginText.classList.add('hidden');
    signupBtn.textContent = 'Sign Up/Login';
  }
})