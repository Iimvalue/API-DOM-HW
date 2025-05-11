document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userName = document.getElementById('userName').value.trim();
    var password = document.getElementById('password').value;
    var storedUserName = localStorage.getItem("user-name");
    var storedPassword = localStorage.getItem("password");
    if (userName === storedUserName && password === storedPassword) {
        window.location.href = '../index.html';
    } else {
        alert('Invalid full name or password');
    }
});