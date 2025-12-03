
document.querySelector('form').addEventListener('submit', (event) => {
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirmPassword');

    if (confirmPass.value !== password.value) {
        event.preventDefault();
        alert('Password do not match');
        password.style.borderColor = 'red'
        confirmPass.style.borderColor = 'red'
    }
})