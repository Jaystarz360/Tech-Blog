const sub = document.querySelector("#submit");

// Function to handle form submission for creating new blog post
const sendNew = async (event) => {
  event.preventDefault();

  // Retrieve title and body values from form inputs
  const title = document.querySelector("#newbpt").value.trim();
  const body = document.querySelector("#newbp").value.trim();

  // Log the values for debugging
  console.log(`newblog.js ${(title, body)}`);

  // Send POST request to create new blog post
  const response = await fetch("/dash/newblog", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // If request is successful, redirect to dashboard
  if (response.ok) {
    document.location.replace("/dash");
  } else {
    
    // If request fails, display alert
    alert("Failed to create blog post.");
  }
};

// Add event listener to submit button
sub.addEventListener("click", sendNew);
