// Sign up
function signup(event) {
    event.preventDefault();

    // Get input values
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var agreeTerms = document.getElementById("AgreeTerms");
    // Basic input validation
    
    if (!agreeTerms.checked) {
        alert("Please agree to the terms and conditions.");
        return;
    }
    // Check if the user already exists in local storage
    if (userExists(email)) {
        alert("User with this email already exists. Please use a different email.");
        return;
    }

    // Create a user object
    var user = {
        email: email,
        username: username,
        password: password,
    };

    // Save the user in local storage
    saveUser(user);

    // Show success message
    alert("User added successfully");
}

// Function to check if the user already exists in local storage
function userExists(email) {
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    return existingUsers.some(function (user) {
        return user.email === email;
    });
}

// Function to save a new user in local storage
function saveUser(user) {
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
}




// Sign in
function signin(event) {
    event.preventDefault();

    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if the "Remember me" checkbox is checked
    var rememberMeCheckbox = document.getElementById("rememberMe");
    if (!rememberMeCheckbox.checked) {
        alert("For security reasons, please check the 'Remember me' option");
        return;
    }

    // Basic input validation
    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Authenticate the user
    if (authenticateUser(email, password)) {
        // If authentication is successful, you can perform additional actions
        alert("Login successful!");
        window.location.href = "./dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Function to authenticate the user
function authenticateUser(email, password) {
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    return existingUsers.some(function (user) {
        return user.email === email && user.password === password;
    });
}

