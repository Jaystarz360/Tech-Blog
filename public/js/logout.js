// Function to handle user logout
const logout = async () => {

  // Send POST request to logout endpoint
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // If logout is successful, redirect to home page
  if (response.ok) {
    document.location.replace("/");
  } else {
    
    // If logout fails, display alert
    alert("Failed to log out.");
  }
};

// Add event listener to logout button
document.querySelector("#logout").addEventListener("click", logout);
