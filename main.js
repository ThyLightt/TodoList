let submitButton = document.getElementById("submitRegistration");
let users = [];
let user ={};
submitButton.onclick = function () {

    let emailAdd = document.getElementById("email");
    if(validateEmail(emailAdd)){
        user.email=emailAdd.value;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        //save to local
    }
    let usernameAdd = document.getElementById("username");
    if(validateUsername(usernameAdd)){
        user.username=usernameAdd.value;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
    }
    let passwordAdd = document.getElementById("password");
    if (validatePassword(passwordAdd)){
        user.password=passwordAdd.value;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
    }
    let passwordConfAdd = document.getElementById("passwordConf");
    if (validatePasswordConf(passwordConfAdd, passwordAdd)){
        user.passwordConf=passwordConfAdd.value;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
    }

}

function validateEmail (email) {
    let emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let result = emailPattern.test(email.value);
    if(result === true) {
        email.style.borderBottom = "1px solid #33CC00"
        return true;
    }else {
        email.style.borderBottom = "1px solid #FF6666"
        return false;
    }
}
function validateUsername(username) {
    let usernamePattern = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    let result = usernamePattern.test(username.value);
    if(result === true) {
        username.style.borderBottom = "1px solid #33CC00"
        return true;
    }else {
        username.style.borderBottom = "1px solid #FF6666"
        return false;
    }
}
function validatePassword (password) {
    let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let result = passwordPattern.test(password.value);
    if (result === true) {
        password.style.borderBottom = "1px solid #33CC00"
        return true;
    } else {
        password.style.borderBottom = "1px solid #FF6666"
        return false;
    }
}
function validatePasswordConf(passwordConf, password) {
    if ( passwordConf.value === password.value)
    {
        passwordConf.styleBorder_bottom = "1px solid #33CC00"
        return true;
    } else {
        passwordConf.styleBorder_bottom = "1px solid #FF6666";
        return false;
    }
}

