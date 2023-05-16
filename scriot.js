"use strict";
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const formEl = document.getElementById("form");

function showErrorMessage(input, message) {
  const formControlEl = input.parentElement;
  const errorEl = formControlEl.querySelector(".error");

  errorEl.classList.add("error-message");
  errorEl.innerText = message;
  input.classList.add("error-input");
}
function showSuccessIndication(input) {
  input.classList.remove("error-input");

  input.classList.add("success");

  const formControlEl = input.parentElement;
  const errorEl = formControlEl.querySelector(".error");

  errorEl.classList.remove("error-message");
}
const inputs = [
  { input: usernameInput, message: "username" },
  { input: emailInput, message: "email" },

  { input: passwordInput, message: "password" },

  { input: confirmPasswordInput, message: "confirm password" },
];
const checkRequired = function (input, message) {
  if (input.value.trim()) {
    showSuccessIndication(input);
  } else {
    showErrorMessage(input, `please include ${message}`);
  }
};
const isEmailAddress = function (str) {
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(str); // returns a boolean
};
const checkEmail = function (input, message) {
  if (isEmailAddress(input.value.trim())) {
    showSuccessIndication(input);
  } else {
    showErrorMessage(input, "enter a valid email");
  }
};

formEl.addEventListener("submit", function (event) {
  // restricting the default behaviour(refresh)
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    checkRequired(inputs[i].input, inputs[i].message);
  }
  if (usernameInput.value.length < 5 || usernameInput.value.length > 16) {
    showErrorMessage(usernameInput, "the use name should be in 5 - 16");
    // } else if (usernameInput.value.length > 16) {
    //   showErrorMessage(usernameInput, "user name should be 16 charectors");
  } else {
    showSuccessIndication(usernameInput);
  }
  if (passwordInput.value.length < 8 || passwordInput.value.length > 16) {
    showErrorMessage(passwordInput, "password should be 8-16 charectors ");
  } else {
    showSuccessIndication(passwordInput);
  }
  if (passwordInput.value === confirmPasswordInput.value) {
    showSuccessIndication(confirmPasswordInput);
  } else {
    showErrorMessage(
      confirmPasswordInput,
      "password and confirm password is not equal"
    );
  }
  checkEmail(emailInput);
});
