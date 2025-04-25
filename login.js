// Event Listener for Login Form Submission
document.querySelector('#loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture Username and Password
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Save Credentials to Local Storage (or for production, send to a secure backend)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to Dashboard
    window.location.href = 'dashboard.html';
});
