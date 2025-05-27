document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function validatePassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
      return passwordRegex.test(password);
  }

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      let isValid = true;

      document.getElementById('emailError').textContent = '';
      document.getElementById('passwordError').textContent = '';

      if (!validateEmail(email)) {
          document.getElementById('emailError').textContent = 'Invalid email format';
          isValid = false;
      }

      if (!validatePassword(password)) {
          document.getElementById('passwordError').textContent = 'Password must be at least 10 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character';
          isValid = false;
      }

      if (isValid) {
          // Redirect to index.html
          window.location.href = 'index.html';
      }
  });

  signupForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const firstname = document.getElementById('firstname').value;
      const lastname = document.getElementById('lastname').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      let isValid = true;

      document.getElementById('firstnameError').textContent = '';
      document.getElementById('lastnameError').textContent = '';
      document.getElementById('signupEmailError').textContent = '';
      document.getElementById('signupPasswordError').textContent = '';

      if (firstname.trim() === '') {
          document.getElementById('firstnameError').textContent = 'First Name is required';
          isValid = false;
      }

      if (lastname.trim() === '') {
          document.getElementById('lastnameError').textContent = 'Last Name is required';
          isValid = false;
      }

      if (!validateEmail(email)) {
          document.getElementById('signupEmailError').textContent = 'Invalid email format';
          isValid = false;
      }

      if (!validatePassword(password)) {
          document.getElementById('signupPasswordError').textContent = 'Password must be at least 10 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character';
          isValid = false;
      }

      if (isValid) {
          // Hide signup form and show login form
          document.getElementById('second').style.display = 'none';
          document.getElementById('first').style.display = 'block';
      }
  });

  document.getElementById('signup').addEventListener('click', function() {
      document.getElementById('first').style.display = 'none';
      document.getElementById('second').style.display = 'block';
  });

  document.getElementById('signin').addEventListener('click', function() {
      document.getElementById('first').style.display = 'block';
      document.getElementById('second').style.display = 'none';
  });
});
