const login = document.getElementById("login")

const user = [];



login.addEventListener("click",
  function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value;
    const password = passwordInput.value;

    const userLoginDetails = {
      userEmail: email,
      userPassword: password
    };

    user.push(userLoginDetails);

    localStorage.setItem("registeredUsers", JSON.stringify(user));

    console.log(JSON.parse("registeredUsers"));

  }
);
