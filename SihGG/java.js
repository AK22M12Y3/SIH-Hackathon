document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill out both fields';
    } else if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
