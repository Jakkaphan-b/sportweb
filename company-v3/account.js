document.addEventListener("DOMContentLoaded", () => {
    const signinForm = document.getElementById("signin-form");
    const loginForm = document.getElementById("login-form");
    const showSigninButton = document.getElementById("show-signin");
    const showLoginButton = document.getElementById("show-login");

    showSigninButton.addEventListener("click", () => {
        loginForm.style.display = "none";
        signinForm.style.display = "block";
    });

    
    showLoginButton.addEventListener("click", () => {
        loginForm.style.display = "block";
        signinForm.style.display = "none";
    });

    

});
