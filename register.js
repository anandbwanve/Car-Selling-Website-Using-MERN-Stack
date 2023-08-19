function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Name validation
    if (name.trim() === "") {
      alert("Please enter your name");
      return false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password should be at least 6 characters long");
      return false;
    }

    // All validations passed
    return true;
  }