document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(span => span.style.display = 'none');
    
    try {
        // Validate name
        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            throw new Error('Name is required.');
        }

        // Validate email
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            throw new Error('Invalid email address.');
        }

        // Validate password
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters.');
        }

        // If no errors are thrown, show success alert
        alert('Thank you for submitting!');
        
        // Optionally, reset the form fields
        document.getElementById('myForm').reset();
        
    } catch (error) {
        valid = false;
        displayError(error.message);
    }

    if (!valid) {
        event.preventDefault();
    }
});

function displayError(message) {
    const errorElements = {
        'Name is required.': 'nameError',
        'Invalid email address.': 'emailError',
        'Password must be at least 6 characters.': 'passwordError'
    };
    const errorElementId = errorElements[message];
    if (errorElementId) {
        document.getElementById(errorElementId).textContent = message;
        document.getElementById(errorElementId).style.display = 'block';
    }
}
document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;
    
    // Clear previous errors and success message
    document.querySelectorAll('.error').forEach(span => span.style.display = 'none');
    document.getElementById('successMessage').textContent = '';

    try {
        // Validate username
        const username = document.getElementById('username').value;
        if (username.trim() === '') {
            throw new Error('Username is required.');
        }

        // Validate name
        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            throw new Error('Name is required.');
        }

        // Validate email
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            throw new Error('Invalid email address.');
        }

        // Validate contact number
        const contact = document.getElementById('contact').value;
        const contactPattern = /^[0-9]{10}$/;
        if (!contactPattern.test(contact)) {
            throw new Error('Contact number must be 10 digits.');
        }

        // Validate date of birth
        const dob = document.getElementById('dob').value;
        if (dob === '') {
            throw new Error('Date of Birth is required.');
        }

        // Validate password
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters.');
        }

        // Validate confirm password
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match.');
        }

        // If no errors are thrown, show success alert
        alert('Thank you for submitting!');
        
        // Optionally, reset the form fields
        document.getElementById('myForm').reset();
        
    } catch (error) {
        valid = false;
        displayError(error.message);
    }

    if (!valid) {
        event.preventDefault();
    }
});

function displayError(message) {
    const errorElements = {
        'Username is required.': 'usernameError',
        'Name is required.': 'nameError',
        'Invalid email address.': 'emailError',
        'Contact number must be 10 digits.': 'contactError',
        'Date of Birth is required.': 'dobError',
        'Password must be at least 6 characters.': 'passwordError',
        'Passwords do not match.': 'confirmPasswordError'
    };
    const errorElementId = errorElements[message];
    if (errorElementId) {
        document.getElementById(errorElementId).textContent = message;
        document.getElementById(errorElementId).style.display = 'block';
    }
}
