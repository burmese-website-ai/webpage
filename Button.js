function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username && password) {
        document.getElementById('message').innerText = "Welcome, " + username + "!";
    } else {
        document.getElementById('message').innerText = "Please enter username and password.";
    }
}

function logout() {
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('message').innerText = "You have logged out.";
}
