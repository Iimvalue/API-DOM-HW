document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let fullName = document.getElementById('full_name').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let email = document.getElementById("email").value
    if (fullName.length <= 3) {
        alert('Full Name should be more than 3 characters');
        return;
    }
    if (password.length <= 3) {
        alert('Password should be more than 3 characters');
        return;
    }
    if (password !== confirmPassword) {
        alert('Confirm Password does not match');
        return;
    }

    localStorage.setItem("user-name", fullName)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    window.location.href = '../login/';

});

