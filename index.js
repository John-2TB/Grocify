const signupBtn = document.getElementById('signupBtn');
const loginText = document.getElementById('loginText');
const arrowIcon = document.getElementById('arrow-icon');

let isLoginVisible = false;

signupBtn.addEventListener('click', function() {
  if (!isLoginVisible) {
    //Show the login text
    loginText.classList.remove('hidden');
    arrowIcon.style.transform = 'rotate(180deg)';
    signupBtn.textContent = 'Sign Up';
    signupBtn.appendChild(arrowIcon); // Re-append the arrow icon after changing text
    isLoginVisible = true;
  } else {
    //Redirect only if the login text is already visible
    window.location.href = 'signup.html';
    loginText.classList.add('hidden');
    arrowIcon.style.transform = 'rotate(0deg)';
    signupBtn.textContent = 'Sign Up/Login';
    isLoginVisible = false;

  }
})