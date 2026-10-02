const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsError = document.getElementById("termsError");

const successMessage = document.getElementById("successMessage");


/* =========================
   VALIDATION FUNCTIONS
========================= */

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {
        nameError.textContent = "Name is required.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        return false;
    }

    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        return false;
    }

    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");

    return true;
}


function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");

    return true;
}


function validatePhone() {

    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        phoneError.textContent = "Phone number is required.";
        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");
        return false;
    }

    if (!phonePattern.test(phone)) {
        phoneError.textContent =
            "Enter a valid 10-digit phone number.";

        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");

        return false;
    }

    phoneError.textContent = "";
    phoneInput.classList.remove("invalid");
    phoneInput.classList.add("valid");

    return true;
}


function validatePassword() {

    const password = passwordInput.value;

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

    if (password === "") {
        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        return false;
    }

    if (!passwordPattern.test(password)) {
        passwordError.textContent =
            "Password does not meet the required format.";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        return false;
    }

    passwordError.textContent = "";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");

    return true;
}


function validateConfirmPassword() {

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword === "") {
        confirmPasswordError.textContent =
            "Please confirm your password.";

        confirmPasswordInput.classList.add("invalid");
        confirmPasswordInput.classList.remove("valid");

        return false;
    }

    if (confirmPassword !== password) {
        confirmPasswordError.textContent =
            "Passwords do not match.";

        confirmPasswordInput.classList.add("invalid");
        confirmPasswordInput.classList.remove("valid");

        return false;
    }

    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove("invalid");
    confirmPasswordInput.classList.add("valid");

    return true;
}


function validateTerms() {

    if (!termsInput.checked) {

        termsError.textContent =
            "You must accept the terms and conditions.";

        return false;
    }

    termsError.textContent = "";

    return true;
}


/* =========================
   REAL-TIME VALIDATION
========================= */

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

phoneInput.addEventListener("input", validatePhone);

passwordInput.addEventListener("input", () => {
    validatePassword();

    if (confirmPasswordInput.value !== "") {
        validateConfirmPassword();
    }
});

confirmPasswordInput.addEventListener(
    "input",
    validateConfirmPassword
);

termsInput.addEventListener(
    "change",
    validateTerms
);


/* =========================
   FORM SUBMISSION
========================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.classList.remove("show");

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid =
        validateConfirmPassword();

    const areTermsValid = validateTerms();


    const isFormValid =
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        areTermsValid;


    if (!isFormValid) {
        return;
    }


    successMessage.textContent =
        "Account created successfully! All form fields are valid.";

    successMessage.classList.add("show");


    form.reset();


    document
        .querySelectorAll(".valid")
        .forEach((input) => {
            input.classList.remove("valid");
        });

});