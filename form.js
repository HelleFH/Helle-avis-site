// Get form element
const form = document.getElementById('my-form');

// Get form fields
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirm-email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const newsletter = document.getElementById('newsletter');
const offers = document.getElementById('offers');
const terms = document.getElementById('terms');

// Add event listener to form
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Validate email and confirm email fields
  if (email.value !== confirmEmail.value) {
    alert('Email-adresserne er ikke ens!');
    return;
  }

  // Validate password and confirm password fields
  if (password.value !== confirmPassword.value) {
    alert('Adgangskoderne er ikke ens!');
    return;
  }

  // Validate name and last name fields
  if (name.value.trim() === '' || lastName.value.trim() === '') {
    alert('Indtast venligst dit fulde navn.');
    return;
  }

  // Validate phone number
  const phoneRegex = /^\d{8}$/; // 8 digits
  if (!phoneRegex.test(phone.value)) {
    alert('Indtast venligst et gyldigt telefonnummer.');
    return;
  }

  // Validate address field
  if (address.value.trim() === '') {
    alert('Indtast venligst din adresse.');
    return;
  }

  // Validate that terms checkbox is checked
  if (!terms.checked) {
    alert('Accepter venligst vores vilkår');
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
});
