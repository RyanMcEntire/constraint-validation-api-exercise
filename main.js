const inputSelectors = {
    email: document.getElementById('email'),
    country: document.getElementById('country'),
    zipCode: document.getElementById('zip-code'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirm-password'),
};
const miscSelectors = {
    submit: document.getElementById('submit'),
    emailError: document.getElementById('email-error'),
    countryError: document.getElementById('country-error'),
    zipCodeError: document.getElementById('zip-code-error'),
    passwordError: document.getElementById('password-error'),
    confirmPasswordError: document.getElementById('confirm-password-error'),
};

function requiredFieldResponse(fieldId) {
    if (fieldId === 'email') {
        miscSelectors.emailError.textContent = 'An email address is required';
        console.log(fieldId);
    }
    if (fieldId === 'country') {
        miscSelectors.countryError.textContent = 'A country is required';
    }
    if (fieldId === 'zip-code') {
        miscSelectors.zipCodeError.textContent = 'A zip code is required';
    }
    if (fieldId === 'password') {
        miscSelectors.passwordError.textContent = 'A password is required';
    }
    if (fieldId === 'confirm-password') {
        miscSelectors.confirmPasswordError.textContent =
            'Please confirm your password';
    }
}

function clearRequiredMessage(fieldId) {
    if (fieldId === 'email') {
        miscSelectors.emailError.textContent = '';
    }
    if (fieldId === 'country') {
        miscSelectors.countryError.textContent = '';
    }
    if (fieldId === 'zip-code') {
        miscSelectors.zipCodeError.textContent = '';
    }
    if (fieldId === 'password') {
        miscSelectors.passwordError.textContent = '';
    }
    if (fieldId === 'confirm-password') {
        miscSelectors.confirmPasswordError.textContent = '';
    }
}

function checkRequired(e) {
    const fieldId = e.target.id;
    if (e.target.validity.valueMissing) {
        requiredFieldResponse(fieldId);
    } else clearRequiredMessage(fieldId);
}

Object.values(inputSelectors).forEach((val) => {
    val.addEventListener('focusin', (e) => {
        e.target.style.background = '#fbf8cc';
    });
});

Object.values(inputSelectors).forEach((val) => {
    val.addEventListener('focusout', (e) => {
        e.target.style.background = '';
        console.log(e);
        checkRequired(e);
    });
});
