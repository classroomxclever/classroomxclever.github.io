function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  const correctPassword = "secret123"; // Change this

  if (passwordInput === correctPassword) {
    // Redirect to secret content
    window.location.href = "secret.html";
  } else {
    document.getElementById('error').textContent = "Incorrect password!";
  }
}
