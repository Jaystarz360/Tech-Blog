// Function to handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get user input values
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // Check if email and password are provided
  if (email && password) {

    // Send POST request to login endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If login is successful, redirect to dashboard
    if (response.ok) {
      document.location.replace("/dash");
    } else {

      // If login fails, display alert
      alert("Failed to log in. Check email or password. Or sign up if new user.");
    }
  }
};

// Function to handle signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Get user input values
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Check if username, email, and password are provided
  if (username && email && password) {

    // Send POST request to signup endpoint
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If signup is successful, redirect to home page
    if (response.ok) {
      document.location.replace("/");
    } else {
      
      // If signup fails, display alert
      alert("Failed to sign up.");
    }
  }
};

// Add event listeners to login and signup forms
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
