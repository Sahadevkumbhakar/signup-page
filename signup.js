function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    // You can add more complex validation logic here, e.g., checking the strength of the password, etc.
  
    // If everything is valid, you can proceed with sending the data to the server or any other actions.
    alert('Signup successful!');  // Replace with your actual signup logic
    window.location.href = 'login.html';
  }
  
