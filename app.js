const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cpassword");

form.addEventListener("submit", (event) => {
 
 if(! validateInputs()){
    event.preventDefault();
 };
});

function validateInputs() {
  const firstNameVal = firstName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cPasswordVal = cPassword.value.trim();
  let sucess = true
  if (firstNameVal === "") {
    sucess=false
    setError(firstName, "First Name is required");
  } else {
    setSucess(firstName);
  }

  if (emailVal === "") {
    sucess=false
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    sucess=false
    setError(email, "Not a valid Email");
  } else {
    setSucess(email);
  }
  if (passwordVal === "") {
    sucess=false
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    sucess=false
    setError(password, "Password is too short");
  } else {
    setSucess(password);
  }

  if (cPasswordVal === "") {
    sucess=false
    setError(cPassword, "Confirm Password is required");
  } else if (cPasswordVal !== passwordVal) {
    sucess=false
    setError(cPassword, "Password not match");
  } else {
    setSucess(cPassword);
  }
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("sucess");
}

function setSucess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("sucess");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
