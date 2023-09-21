const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Validation Function (set html form as 'novalidate' to use javascritp validation function)
let isValid = false;
function validateForm() {
    //Using Contraint API
    isValid = form.checkValidity();
    //Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red'
}

function processFormData(e) {
    e.preventDefault();
    //Validate Form
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);