// Function to handle adding a new comment
const addComment = async (event) => {
  event.preventDefault();

  // Get values from form inputs
  const comBody = document.querySelector("#comment").value.trim();
  const blog_id = document.querySelector("#blogid").value;

  // Send POST request to comments endpoint
  const response = await fetch("/comm", {
    method: "POST",
    body: JSON.stringify({ comBody, blog_id }),
    headers: { "Content-Type": "application/json" },
  });

  // If comment is added successfully, redirect to dashboard
  if (response.ok) {
    document.location.replace("/dash");
  } else {
    
    // If comment addition fails, display alert
    alert("Failed to add comment.");
  }
};

// Add event listener to submit button
document.querySelector("#submit").addEventListener("click", addComment);
