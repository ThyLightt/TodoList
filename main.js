let submitButton = document.getElementById("submitRegistration");
submitButton.onclick = function () {

    let emailAdd = document.getElementById("email");
    validateEmail(emailAdd);
    let usernameAdd = document.getElementById("username");
    validateUsername(usernameAdd);
    let passwordAdd = document.getElementById("password");
    validatePassword(passwordAdd);
    let passwordConfAdd = document.getElementById("passwordConf");
    validatePasswordConf(passwordConfAdd); }

function validateEmail (email) {
    let emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let result = emailPattern.test(email.value);
    if(result === true) {
        email.style.borderBottom = "2px solid green"
    }else {
        email.style.borderBottom = "2px solid red"
    }
}
function validateUsername(username) {
    let usernamePattern = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    let result = usernamePattern.test(username.value);
    if(result === true) {
        username.style.borderBottom = "2px solid green"
    }else {
        username.style.borderBottom = "2px solid red"
    }
}
function validatePassword (password) {
    let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let result = passwordPattern.test(password.value);
    if (result === true) {
        password.style.borderBottom = "2px solid green"
    } else {
        password.style.borderBottom = "2px solid red"
    }
}
function validatePasswordConf(passwordConf) {
    if ( passwordConf.value === password.value) {
        passwordConf.styleBorder_bottom = "2px solid green"
    } else {
        passwordConf.styleBorder_bottom = "2px solid red";
    }
}

