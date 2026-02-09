document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const errorMsg = document.getElementById("errorMsg");

    const passwordInput = document.getElementById("password");
    const generateBtn = document.getElementById("generatePassword");

    togglePassword.addEventListener("change", () => {
        passwordInput.type = togglePassword.checked ? "text" : "password";
    })


    form.addEventListener("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        clearError();

        const firstName = fnameInput.value.trim();
        const lastName = lnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();


        if (!firstName || !lastName || !email || !password) {
            showError("All fields are required.");
            return;
        }


        if (!isValidEmail(email)) {
            showError("Please enter a valid email address.");
            return;
        }


        alert("Form submitted successfully!");
        form.reset();
    }

    // --- Email Validation ---
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.style.color = "red";
    }

    function clearError() {
        errorMsg.textContent = "";
    }


    generateBtn.addEventListener("click", () => {
        const generatedPassword = passwordGenerator(12, true, true, true, true);
        passwordInput.value = generatedPassword;
    });

    function passwordGenerator(length, lowerCaseChar, upperCaseChar, numbersInclude, symbolInclude) {
        const charLowerCase = "abcdefghijklmnopqrstuvwxyz";
        const charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charNumbers = "1234567890";
        const charSymbols = "`~!@#$%^&*()_-+=[]{}\\|;:',<.>/?";

        let addChars = "";
        let password = "";

        addChars += lowerCaseChar ? charLowerCase : "";
        addChars += upperCaseChar ? charUpperCase : "";
        addChars += numbersInclude ? charNumbers : "";
        addChars += symbolInclude ? charSymbols : "";

        if (length <= 0) return "Password length must be at least 1";
        if (addChars.length === 0) return "Select at least one character set";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * addChars.length);
            password += addChars[randomIndex];
        }

        return password;
    }

    console.log("Script loaded successfully");
});
