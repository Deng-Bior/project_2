let fullName;
let email;
let phoneNumber;
let dateOfBirth;
let gender;

function fullNameChangeHandler(event) {
    fullName = event.target.value
}

function emailChangeHandler(event) {
    email = event.target.value
}

function phoneNumberChangeHandler(event) {
    phoneNumber = event.target.value
}

function dateOfBirthChangeHandler(event) {
    dateOfBirth = event.target.value
}

function genderChangeHandler(event) {
    gender = event.target.value
}


function onSubmitHandler(event) {
    event.preventDefault();
    console.log(fullName,email,dateOfBirth,gender,phoneNumber);
}


