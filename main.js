const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const emailError = document.getElementById('form');
const countryError = document.getElementById('form');
const passwordError = document.getElementById('form');
const confirmPasswordError = document.getElementById('form');
const submit = document.getElementById('submit');

form.addEventListener('focusin', (e) => {
    e.target.style.background = '#ff6d00';
});

form.addEventListener('focusout', (e) => {
    e.target.style.background = '';
});

