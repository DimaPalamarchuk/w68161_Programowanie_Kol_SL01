function validateForm(event) {
    event.preventDefault(); // Zapobiegaj wysyłce formularza

    // Wyczyść poprzednie komunikaty o błędach
    document.getElementById('loginError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Pobierz wartości z formularza
    var login = document.getElementById('login').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Walidacja loginu
    if (login.length < 3) {
      document.getElementById('loginError').textContent = 'Login musi mieć minimum 3 znaki';
      return;
    }

    // Walidacja emaila
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Nieprawidłowy adres email';
      return;
    }

    // Walidacja hasła
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Hasło musi mieć minimum 6 znaków';
      return;
    }

    // Walidacja powtórzonego hasła
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Hasła nie pasują do siebie';
      return;
    }

    // Jeśli wszystkie walidacje przejdą, możesz kontynuować z wysyłką formularza
    document.getElementById('registrationForm').submit();
  }