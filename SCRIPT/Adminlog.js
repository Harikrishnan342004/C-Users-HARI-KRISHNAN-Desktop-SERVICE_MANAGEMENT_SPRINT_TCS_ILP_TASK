function validateAdminLogin() {
    const username = document.getElementById('uid').value;
    const password = document.getElementById('pass').value;

    // Correct username and password
    if ((username === 'admin' && password === 'admin123') || username === 'admin1' && password === 'admin1234' ) {
        window.location.href = 'admin.html'; // Redirect to the admin panel
        return false; // Prevent form submission
    } else {
        alert('Invalid login credentials');
        return false; // Prevent form submission
    }
}