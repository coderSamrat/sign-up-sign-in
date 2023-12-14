const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const title = document.querySelector('.form-box h2');

signupBtn.onclick = function () {
    alert("If you are sure to Sign up then Click Ok!");
    title.innerHTML = "Sign Up";
}

const icon = document.querySelector('.icon');
let passwordInput = document.getElementById('password');

icon.addEventListener('click', function () {
    this.classList.toggle("bxs-show");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
});
