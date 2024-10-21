function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

function validateForm() {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let isValid = true;

  // Validar el correo electrónico
  if (!validateEmail(email)) {
    document.getElementById("emailError").innerText = "Correo inválido.";
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Validar el usuario
  if (username.length < 3) {
    document.getElementById("usernameError").innerText =
      "El usuario debe tener al menos 3 caracteres.";
    document.getElementById("usernameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("usernameError").style.display = "none";
  }

  // Validar la contraseña
  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "La contraseña debe tener al menos 6 caracteres.";
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("passwordError").style.display = "none";
  }

  return isValid;
}
