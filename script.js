// contact form
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
  
    alert("Thank you for contacting me. I'll get back to you.");
   
    return true;
  }
  
  function validateName() {  
     let nameField = document.getElementById("name");   
     let nameRegex = /^[A-Za-z\s]+$/; // Regular expression to match alphabetic characters and spacesif 
     if (nameRegex.test(nameField.value)) {     
       nameField.style.borderColor = "green";   
      } 
      else {     
        nameField.style.borderColor = "red";   } 
    } 
      function validateEmail() {  
         let emailField = document.getElementById("email");   
         let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for validating email
         if (emailRegex.test(emailField.value)) {    
           emailField.style.borderColor = "green";   
        } 
         else {     
          emailField.style.borderColor = "red";   
        } 
    }