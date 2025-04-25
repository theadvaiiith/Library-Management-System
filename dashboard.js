// Navigation Functionality
function navigateTo(page) {
    window.location.href = page;
}

// Check Login (if you want to restrict dashboard access without login)
document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (!username || !password) {
        alert('Please log in first!');
        window.location.href = 'login.html';
    }
});
