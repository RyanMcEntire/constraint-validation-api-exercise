const inputSelectors = {
    email: document.getElementById('email'),
    country: document.getElementById('country'),
    zipCode: document.getElementById('zip-code'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirm-password'),
};
const miscSelectors = {
    emailError: document.getElementById('email-error'),
    countryError: document.getElementById('country-error'),
    zipCodeError: document.getElementById('zip-code-error'),
    passwordError: document.getElementById('password-error'),
    confirmPasswordError: document.getElementById('confirm-password-error'),
};

const submit = document.getElementById('submit');

function requiredFieldResponse(fieldId) {
    if (fieldId === 'email') {
        miscSelectors.emailError.textContent = 'An email address is required';
        miscSelectors.emailError.className = 'error active';
    }
    if (fieldId === 'country') {
        miscSelectors.countryError.textContent = 'A country is required';
        miscSelectors.countryError.className = 'error active';
    }
    if (fieldId === 'zip-code') {
        miscSelectors.zipCodeError.textContent = 'A zip code is required';
        miscSelectors.zipCodeError.className = 'error active';
    }
    if (fieldId === 'password') {
        miscSelectors.passwordError.textContent = 'A password is required';
        miscSelectors.passwordError.className = 'error active';
    }
    if (fieldId === 'confirm-password') {
        miscSelectors.confirmPasswordError.textContent =
            'Please confirm your password';
        miscSelectors.confirmPasswordError.className = 'error active';
    }
}

function clearRequiredMessage(fieldId) {
    if (fieldId === 'email') {
        miscSelectors.emailError.textContent = '';
        miscSelectors.emailError.className = 'error active';
    }
    if (fieldId === 'country') {
        miscSelectors.countryError.textContent = '';
        miscSelectors.countryError.className = 'error active';
    }
    if (fieldId === 'zip-code') {
        miscSelectors.zipCodeError.textContent = '';
        miscSelectors.zipCodeError.className = 'error active';
    }
    if (fieldId === 'password') {
        miscSelectors.passwordError.textContent = '';
        miscSelectors.passwordError.className = 'error active';
    }
    if (fieldId === 'confirm-password') {
        miscSelectors.confirmPasswordError.textContent = '';
        miscSelectors.confirmPasswordError.className = 'error active';
    }
    miscSelectors.emailError.className = 'error';
}

function checkRequired(e) {
    const fieldId = e.target.id;
    if (e.target.validity.valueMissing) {
        requiredFieldResponse(fieldId);
    } else clearRequiredMessage(fieldId);
}

Object.values(inputSelectors).forEach((val) => {
    val.addEventListener('focusin', (e) => {
        e.target.style.background = '#fbf8cc90';
    });
});

Object.values(inputSelectors).forEach((val) => {
    val.addEventListener('focusout', (e) => {
        e.target.style.background = '';
        console.log(e);
        checkRequired(e);
    });
});

function showEmailError() {
    if (inputSelectors.email.validity.typeMismatch) {
        miscSelectors.emailError.textContent =
            'Please enter in a valid email address';
    } else if (inputSelectors.email.validity.tooShort) {
        miscSelectors.emailError.textContent = `email should be at least ${email.minLength} characters. You entered ${email.value.length}`;
    }
    miscSelectors.emailError.className = 'error active';
}

inputSelectors.email.addEventListener('input', () => {
    if (inputSelectors.email.validity.valid) {
        miscSelectors.emailError.textContent = '';
        miscSelectors.emailError.className = 'error';
    } else {
        showEmailError();
    }
});

function showCountryError() {
    if (inputSelectors.country.validity.patternMismatch) {
        miscSelectors.countryError.textContent = `Countries don't use numbers or special characters`;
    } else if (inputSelectors.country.validity.tooShort) {
        miscSelectors.countryError.textContent = `Country should be at least ${country.minLength} characters. You entered ${country.value.length}`;
    } else if (inputSelectors.country.validity.tooLong) {
        miscSelectors.countryError.textContent = `Country should be at less than ${country.maxLength} characters. You entered ${country.value.length}`;
    }
    miscSelectors.countryError.className = 'error active';
}

inputSelectors.country.addEventListener('input', () => {
    if (inputSelectors.country.validity.valid) {
        miscSelectors.countryError.textContent = '';
        miscSelectors.countryError.className = 'error';
    } else {
        showCountryError();
    }
});

function showZipCodeError() {
    if (inputSelectors.zipCode.validity.patternMismatch) {
        miscSelectors.zipCodeError.textContent = `Please enter a 5 digit Zip Code`;
    }
    miscSelectors.zipCodeError.className = 'error active';
}

inputSelectors.zipCode.addEventListener('input', () => {
    if (inputSelectors.zipCode.validity.valid) {
        miscSelectors.zipCodeError.textContent = '';
        miscSelectors.zipCodeError.className = 'error';
    } else {
        showZipCodeError();
    }
});

// password validator
function showPasswordError() {
    if (inputSelectors.password.validity.tooShort) {
        miscSelectors.passwordError.textContent = `password should be at least ${password.minLength} characters. You entered ${password.value.length}`;
    } else if (inputSelectors.password.validity.patternMismatch) {
        miscSelectors.passwordError.textContent = `Password must contain one digit, one lowercase, one uppercase, one special character, and be at least ${password.minLength} characters`;
    }
    miscSelectors.passwordError.className = 'error active';
}

inputSelectors.password.addEventListener('input', () => {
    if (inputSelectors.password.validity.valid) {
        miscSelectors.passwordError.textContent = '';
        miscSelectors.passwordError.className = 'error';
    } else {
        showPasswordError();
    }
});

// confirms password
function showConfirmPasswordError() {
    miscSelectors.confirmPasswordError.textContent = `Password doesn't match`;
    miscSelectors.confirmPasswordError.className = 'error active';
}

inputSelectors.confirmPassword.addEventListener('input', () => {
    if (inputSelectors.confirmPassword.value === inputSelectors.password.value) {
        miscSelectors.confirmPasswordError.textContent = 'passwords match';
        miscSelectors.confirmPasswordError.className = 'error';
    } else {
        showConfirmPasswordError();
    }
});
