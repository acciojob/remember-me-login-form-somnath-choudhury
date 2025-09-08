//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingUserButton = document.getElementById("existing");

window.onload = function() {
    const savedUserName = localStorage.getItem("username")
    const savedPassword = localStorage.getItem("password")

    if (savedUserName && savedPassword) {
        existingUserButton.style.display = 'inline-block'
    }
    else {
        existingUserButton.style.display = 'none'
    }

    usernameInput.value = "";
    passwordInput.value = "";
    rememberMeCheckbox.checked = false;
}

submitButton.addEventListener('click', function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        alert("Please enter username and password...")
        return;
    }

    alert(`Logged in as ${username}`)

    if (rememberMeCheckbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
    else {
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }

    const savedUserName = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    existingUserButton.style.display = (savedUserName && savedPassword)? "inline-block" : "none"
});


existingUserButton.addEventListener('click', function() {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`)
    }
})