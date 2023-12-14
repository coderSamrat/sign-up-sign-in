const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const title = document.querySelector('.form-box h2');

signinBtn.onclick = function () {
    title.innerHTML = "Sign In";
}

const icon = document.querySelector('.icon');
let passwordInput = document.getElementById('password');

icon.addEventListener('click', function () {
    this.classList.toggle("bxs-show");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
});
