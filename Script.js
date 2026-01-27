const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');
const submit = document.getElementById('submit-btn');

const inputName = document.getElementById('fname').value.trim();
const inputEmail = document.getElementById('email').value.trim();
const inputSurname = document.getElementById('lname').value.trim();


form.addEventListener('submit', function (event) {
    errorMsg.textContent = '';

    if (!emailInput.checkValidity()) {
        event.preventDefault();

        if (emailInput.validity.valueMissing) {
            errorMsg.textContent = 'Email is required.';
        } else if (emailInput.validity.typeMismatch) {
            errorMsg.textContent = 'Please enter a valid email address.';
        }
    }
});

submit.addEventListener("click", (event) => {
    if (inputName === "" || inputSurname === "" || !inputEmail) {
        event.preventDefault();
        alert(`Please fill in all the required fields first`);
    }
    else {
        alert("Form Submitted");
    }
});
