document.addEventListener("DOMContentLoaded", function () {
  // Check if the user has already seen the newsletter popup by using localStorage
  if (!localStorage.getItem("newsletterShown")) {
    console.log("Showing newsletter form!");
    // Show the form
    const formContainer = document.getElementById('newsletter-form-container');
    formContainer.style.display = 'block'; // Make sure it's visible
    
    // Set a flag in localStorage to indicate that the popup has been shown
    localStorage.setItem("newsletterShown", "true");
  } else {
    console.log("Newsletter form already shown.");
  }
});

// Handle form submission
const formContainer = document.getElementById('newsletter-form-container');
const formnews = document.getElementById('newsletter-form');
const thanksMessage = document.getElementById('thanks-message');

formnews.addEventListener('submit', function (event) {
  event.preventDefault();
  
  // Show "Thanks for subscribing" message
  thanksMessage.style.display = 'block';

  // Reset form fields
  const inputs = formnews.querySelectorAll('input');
  inputs.forEach(function (input) {
    input.value = '';
  });
});

// Function to close the "Thank You" message
function closeThanks() {
  thanksMessage.style.display = 'none';
}

// Function to close the newsletter form
function closeForm() {
  formContainer.style.display = 'none';
}
