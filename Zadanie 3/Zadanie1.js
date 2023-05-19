
function validateForm(event) {
    event.preventDefault();

    document.getElementById('loginError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';


    var login = document.getElementById('login').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (login.length < 3) {
      document.getElementById('loginError').textContent = 'Login musi mieć minimum 3 znaki';
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Nieprawidłowy adres email';
      return;
    }

    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Hasło musi mieć minimum 6 znaków';
      return;
    }

    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Hasła nie pasują do siebie';
      return;
    }

    document.getElementById('registrationForm').submit();
  }