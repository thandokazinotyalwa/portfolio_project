// contact form
function validateName() {
  let nameField = document.getElementById("name");
  let nameRegex = /^[A-Za-z\s]+$/; // Regular expression to match alphabetic characters and spacesif
  if (nameRegex.test(nameField.value)) {
    nameField.style.borderColor = "green";
  } else {
    nameField.style.borderColor = "red";
  }
}

function validateEmail() {
  let emailField = document.getElementById("email");
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for validating email
  if (emailRegex.test(emailField.value)) {
    emailField.style.borderColor = "green";
  } else {
    emailField.style.borderColor = "red";
  }
}

function validateForm() {
  let nameField = document.getElementById("name");
  let nameRegex = /^[a-z ,.'-]+$/i; // Regular expression to match only alphabetic characters
  let nameValue = nameField.value;
  let emailField = document.getElementById("email");
  let emailValue = emailField.value;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for validating email

  // Resetting styles
  nameField.style.border = "1px solid #ced4da"; // Reset border color
  emailField.style.border = "1px solid #ced4da"; // Reset border color

  // Name validation
  if (!nameRegex.test(nameValue)) {
    alert("Please enter a valid name with only alphabetic characters.");
    nameField.style.border = "1px solid red"; // Change border color to red
    return false;
  }

  // Email validation
  if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    emailField.style.border = "1px solid red"; // Change border color to red
    return false;
  }

  // Form is valid
  return true;
}

function sendEmail() {
  // Validate the form
  if (!validateForm()) {
    // Form is not valid, return without sending email
    return;
  }

  (function () {
    emailjs.init("E2hP5vdXMtbHYN0LK");
  })();

  var params = {
    sendername: document.querySelector("#name").value.trim(),
    email: document.querySelector("#email").value.trim(),
    message: document.querySelector("#message").value.trim(),
  };

  var serviceID = "service_fi3tymw";
  var templateID = "template_gi8vx0q";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email Sent Successfully✔");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      alert("Email sending failed. Please try again later.");
    });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    sendEmail(); // Call sendEmail function when form is submitted
  });

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


