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

    // Function to save form data to localStorage
 // function saveFormData(formData) {
    // Check if localStorage is supported
    //if (typeof(Storage) !== "undefined") {
        // Save form data
        //localStorage.setItem("formData", JSON.stringify(formData));
   // } else {
        // localStorage not supported, handle accordingly
      //  alert("Sorry, your browser does not support local storage.");
  //  }
//}


const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_fi3tymw','template_gi8vx0q','#contact-form','E2hP5vdXMtbHYN0LK')
  .then(() => {
    //show sent message
    contactMessage.textContent = 'Message sent successfully ✔';

    //remove message after five seconds
    setTimeout (() => {
      contactMessage.textContent = '';
    }, 5000);

    //clear input fields
    contactForm.reset();
    
  })
  .catch(() => {
    contactMessage.textContent = 'Message not sent (service error) ';
  });
};


contactForm.addEventListener('submit', sendEmail)

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const navLinks = document.getElementById('nav-link');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
  navToggle.addEventListener('clicks', () =>{
    navLinks.classList.add('show-menu')
  })
}
 
if(navClose){
  navClose.addEventListener('click', () =>{
    navLinks.classList.remove('show-menu')
  })
}

/*=======remove menu mobile=====*/
const navLink = document.querySelectorAll('.nav_')