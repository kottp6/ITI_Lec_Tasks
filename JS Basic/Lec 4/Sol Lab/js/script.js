
// const fullNameInput = document.getElementById('fullName');
// const nameErrorMessage = document.getElementById('nameErrorMessage');
// const passwordInput = document.getElementById('password');
// const repeatPasswordInput = document.getElementById('repeatPassword');
// const passwordErrorMessage = document.getElementById('passwordErrorMessage');

//1
//Add event listeners for focus and blur on full name field
// fullNameInput?.addEventListener('focus', () => {
    
//     fullNameInput.style.border = 'solid 1px blue';
// });

// fullNameInput?.addEventListener('blur', () => {
//     fullNameInput.style.border = '';
//     validateFullName();
// });


// // Validate full name
// function validateFullName() {
//     const fullName = fullNameInput.value.trim();
//     if (fullName === '' || fullName.length <= 3) {
//         nameErrorMessage.style.display = 'inline';
//         fullNameInput.classList.add('invalid');
//         fullNameInput.classList.remove('valid');
//         // fullNameInput.focus();
//         // fullNameInput.select();
//     } else {
//         nameErrorMessage.style.display = 'none';
//         fullNameInput.classList.add('valid');
//         fullNameInput.classList.remove('invalid');
//     }
// }

// // Validate passwords
// repeatPasswordInput?.addEventListener('blur', () => {
//     validatePasswords();
// });

// function validatePasswords() {
//     const password = passwordInput.value.trim();
//     const repeatPassword = repeatPasswordInput.value.trim();

//     if (password !== repeatPassword || password === '') {
//         passwordErrorMessage.style.display = 'inline';
//         repeatPasswordInput.classList.add('invalid');
//         repeatPasswordInput.classList.remove('valid');
//     } else {
//         passwordErrorMessage.style.display = 'none';
//         repeatPasswordInput.classList.add('valid');
//         repeatPasswordInput.classList.remove('invalid');
//     }
// }

// function validateForm() {
//     let isValid = true;

//     // Validate full name
//     if (!validateFullName()) {
//         isValid = false;
//     }

//     // Validate passwords
//     if (!validatePasswords()) {
//         isValid = false;
//     }

//     return isValid;
// }


//2
// Form submission validation
// var formData = document.getElementById('registrationForm');
// var errMsg = document.getElementById("errorSubmit")
// formData?.addEventListener('submit', function(event) {
//     let isValid = true;
//     // Validate full name
//     const fullName = fullNameInput.value.trim();
//     if (fullName === '' || fullName.length <= 3) {
//         nameErrorMessage.style.display = 'inline';
//         fullNameInput.classList.add('invalid');
//         fullNameInput.classList.remove('valid');
//         isValid = false;
//     } else{
//         nameErrorMessage.style.display = 'none';
//         fullNameInput.classList.add('valid');
//         fullNameInput.classList.remove('invalid');
//     }
//     const password = passwordInput.value.trim();
//     const repeatPassword = repeatPasswordInput.value.trim();
//     if (password !== repeatPassword || password === '') {
//         passwordErrorMessage.style.display = 'inline';
//         repeatPasswordInput.classList.add('invalid');
//         repeatPasswordInput.classList.remove('valid');
//         isValid = false;
//     } else {
//         passwordErrorMessage.style.display = 'none';
//         repeatPasswordInput.classList.add('valid');
//         repeatPasswordInput.classList.remove('invalid');
//     }

//     // If any validation fails, prevent form submission and show a message
//     if (!isValid) {
//         event.preventDefault(); // Stop the form from submitting
//         //alert("Please correct the validation errors first."); // Inform the user
//         errorSubmit.innerText = 'Please correct the validation errors first.';
//     }
// });





// 4 valid-feedback invalid-feedback



//to take username to another page from url
// var msg = document.getElementById("welcome-message"); // id -> h1 in thankyou Page
// function getParams(name)
// {
//     var param = new URLSearchParams(window.location.search);
//     console.log(param);
//     return param.get(name)
// }
// // username -> this input of username which take name="username"
// var username = getParams("username") || "Person"; 
// msg.innerText = `Welcome ${username}`;
