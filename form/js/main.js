'use strict';

window.addEventListener('load', function() {
    
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        if(validateForm()) {
            //TODO submit form
            console.log("The form is valid to be sent");
        }
    });
});

function validateForm() {
    removeErrors();

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const dateOfBirth = document.getElementById('dateofbirth');
    const phoneNumber = document.getElementById('phonenumber');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const termsAndConditions = document.getElementById('termsandconditions');

    return validateName(name)
        && validateSurname(surname)
        && validateDateOfBirth(dateOfBirth)
        && validatePhoneNumber(phoneNumber)
        && validateEmail(email)
        && validatePassword(password)
        && validateTermsAndConditions(termsAndConditions);
}

function validateName(name) {
    const value = name.value;
    if(!value) { //true when value is undefined, null or empty
        setError(name, NAME_IS_REQUIRED_ERROR)
        return false;
    }
    if(value.length < 4 || value.length > 16) {
        setError(name, NAME_LENGTH_ERROR);
        return false;
    }
    if(!REGEX_NAME_SURNAME.test(value)) {
        setError(name, NAME_PATTERN_ERROR);
        return false;
    }
    return true;
}

function validateSurname(surname) {
    const value = surname.value;
    if(!value) { //true when value is undefined, null or empty
        setError(surname, SURNAME_IS_REQUIRED_ERROR)
        return false;
    }
    if(value.length < 4 || value.length > 16) {
        setError(surname, SURNAME_LENGTH_ERROR);
        return false;
    }
    if(!REGEX_NAME_SURNAME.test(value)) {
        setError(surname, SURNAME_PATTERN_ERROR);
        return false;
    }
    return true;
}

function validateDateOfBirth(dateOfBirth) {
    const value = dateOfBirth.value;
    if(!value) { //true when value is undefined, null or empty
        setError(dateOfBirth, DATE_IS_REQUIRED_ERROR)
        return false;
    }
    if(!isValidDate(value)) {
        setError(dateOfBirth, DATE_PATTERN_ERROR);
        return false;
    }
    return true;
}

function isValidDate(value) {
    const dateParts = value.split('/');
    //Value comes in format DD/MM/YYYY so we need to
    //convert the value to format YYYY/MM/DD
    const formattedValue = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    const date = new Date(formattedValue);
    return !isNaN(new Date(date));
}

function validatePhoneNumber(phoneNumber) {
    const value = phoneNumber.value;
    if(!value) { //true when value is undefined, null or empty
        setError(phoneNumber, PHONE_NUMBER_IS_REQUIRED)
        return false;
    }
    if(value.length < 5 || value.length > 15) {
        setError(phoneNumber, PHONE_NUMBER_LENGTH_ERROR);
        return false;
    }
    if(!REGEX_PHONE_NUMBER.test(value)) {
        setError(phoneNumber, PHONE_NUMBER_PATTERN_ERROR);
        return false;
    }
    return true;
}

function validateEmail(email) {
    const value = email.value;
    if(!value) { //true when value is undefined, null or empty
        setError(email, EMAIL_IS_REQUIRED_ERROR)
        return false;
    }
    if(value.length < 5 || value.length > 50) {
        setError(email, EMAIL_LENGTH_ERROR);
        return false;
    }
    if(!REGEX_EMAIL.test(value)) {
        setError(email, EMAIL_PATTERN_ERROR);
        return false;
    }
    return true;
}

function validatePassword(password) {
    const value = password.value;
    if(!value) { //true when value is undefined, null or empty
        setError(password, PASSWORD_IS_REQUIRED_ERROR)
        return false;
    }
    if(value.length < 4 || value.length > 20) {
        setError(password, PASSWORD_LENGTH_ERROR);
        return false;
    }
    if(!REGEX_PASSWORD.test(value)) {
        setError(password, PASSWORD_PATTERN_ERROR);
        return false;
    }
    return true;
}

function validateTermsAndConditions(termsAndConditions) {
    const value = termsAndConditions.checked;
    if(!value) {
        setErrorTermsAndConditions(termsAndConditions, TERMS_AND_CONDITIONS_ERROR);
    }
    return value;
}

function removeErrors() {
    const errors = document.getElementsByClassName('error');
    for(let error of errors) {
        error.classList.add('hidden');
    };
}

function setError(element, message) {
    const parent = element.closest('.input-group');
    const error = parent.getElementsByClassName('error')[0];
    error.innerHTML = message;
    error.classList.remove('hidden');
}

function setErrorTermsAndConditions(element, message) {
    const parent = element.closest('.input-group-terms-and-conditions');
    const error = parent.getElementsByClassName('error')[0];
    error.innerHTML = message;
    error.classList.remove('hidden');
}

const NAME_IS_REQUIRED_ERROR = 'Name is required';
const NAME_LENGTH_ERROR = 'Name should name should be between 4 to 16 characters';
const NAME_PATTERN_ERROR = 'Name should be alphabet only';

const SURNAME_IS_REQUIRED_ERROR = 'Surname is required';
const SURNAME_LENGTH_ERROR = 'Surname should be between 4 to 16 characters';
const SURNAME_PATTERN_ERROR = 'Surname should be alphabet only';

const DATE_IS_REQUIRED_ERROR = 'Date of Birth is required';
const DATE_PATTERN_ERROR = 'Date of Birth should be a valid date';

const PHONE_NUMBER_IS_REQUIRED = 'Phone number is required';
const PHONE_NUMBER_LENGTH_ERROR = 'Phone number should be between 5 to 15 characters';
const PHONE_NUMBER_PATTERN_ERROR = 'Phone number should be numbers only';

const EMAIL_IS_REQUIRED_ERROR = 'Email is required';
const EMAIL_LENGTH_ERROR = 'Email should be between 5 to 50 characters';
const EMAIL_PATTERN_ERROR = 'Email should be a valid email';

const PASSWORD_IS_REQUIRED_ERROR = 'Password id required';
const PASSWORD_LENGTH_ERROR = 'Password should be between 4 to 20 characters';
const PASSWORD_PATTERN_ERROR = 'Password should contain alphabet and numbers only';

const TERMS_AND_CONDITIONS_ERROR = 'Please accept terms and conditions';

const REGEX_NAME_SURNAME = /^([a-zA-Z]+)$/;
const REGEX_PHONE_NUMBER = /^\d+$/;
const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const REGEX_PASSWORD = /^[a-zA-Z0-9]+$/;