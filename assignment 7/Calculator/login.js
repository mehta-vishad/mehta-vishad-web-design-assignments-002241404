$(document).ready(function () {
    function validateFields() {
        let isValid = true;

        
        const email = $('#email').val();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        if (!email) {
            $('#error-email').text('Email cannot be empty.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#error-email').text('Must be a Northeastern email.');
            isValid = false;
        } else {
            $('#error-email').text('');
        }

       
        const username = $('#username').val();
        if (!username) {
            $('#error-username').text('Username cannot be empty.');
            isValid = false;
        } else if (/\W/.test(username)) {
            $('#error-username').text('Username must not contain special characters.');
            isValid = false;
        } else if (username.length < 4 || username.length > 20) {
            $('#error-username').text('Username must be 4-20 characters long.');
            isValid = false;
        } else {
            $('#error-username').text('');
        }

        
        const password = $('#password').val();
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Example regex, adjust as needed
        if (!password) {
            $('#error-password').text('Password cannot be empty.');
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            $('#error-password').text('Password must be minimum eight characters, at least one letter and one number.');
            isValid = false;
        } else {
            $('#error-password').text('');
        }

        
        const confirmPassword = $('#confirm-password').val();
        if (!confirmPassword) {
            $('#error-confirm-password').text('Please confirm your password.');
            isValid = false;
        } else if (password !== confirmPassword) {
            $('#error-confirm-password').text('Passwords do not match.');
            isValid = false;
        } else {
            $('#error-confirm-password').text('');
        }

        
        $('#login-button').prop('disabled', !isValid);
    }

    
    $('#email, #username, #password, #confirm-password').on('input', validateFields);

    
    $('#login-button').click(function () {
        if (!this.disabled) {
            
            const username = $('#username').val();
            window.location.href = `./calculator.html?username=${encodeURIComponent(username)}`;
        }
    });
    

});

