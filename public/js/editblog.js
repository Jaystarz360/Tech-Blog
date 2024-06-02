// Function to handle edit blog submission
const sendEdit = async (event) => {
  event.preventDefault();

  // Get values from form inputs
  const title = document.querySelector("#editbpt").value.trim();
  const body = document.querySelector("#editbp").value.trim();
  const id = document.querySelector("#blogid").value;

  // Send PUT request to edit endpoint
  const response = await fetch("/dash/edit", {
    method: "PUT",
    body: JSON.stringify({ title, body, id }),
    headers: { "Content-Type": "application/json" },
  });

  // If edit is successful, redirect to dashboard
  if (response.ok) {
    document.location.replace("/dash");
  } else {
    
    // If edit fails, display alert
    alert("Failed to edit post.");
  }
};

// Function to handle delete blog submission
const sendDelete = async (event) => {
  event.preventDefault();

  // Get blog id from form input
  const id = document.querySelector("#blogid").value;

  // Send DELETE request to delete endpoint
  const response = await fetch(`/dash/edit/${id}`, {
    method: "DELETE",
  });

  // If delete is successful, redirect to dashboard
  if (response.ok) {
    document.location.replace("/dash");
  } else {
    // If delete fails, display alert
    alert("Failed to delete post.");
  }
};

// Add event listeners to submit and delete buttons
document.querySelector("#submit").addEventListener("click", sendEdit);
document.querySelector("#delete").addEventListener("click", sendDelete);
