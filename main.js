const namefield = document.getElementById("namefield");
const emailfield = document.getElementById("emailfield");
const phonefield = document.getElementById("phonefield");
const subjectfield = document.getElementById("subjectfield");
const messagefield = document.getElementById("messagefield");
const errorname = document.getElementById("errorname");
const erroremail = document.getElementById("erroremail");
const errorphone = document.getElementById("errorphone");
const errorsubject = document.getElementById("errorsubject");
const errormessage = document.getElementById("errormessage");
const submitbtn = document.querySelector(".submitbtn");
const form = document.querySelector(".formdesign");
const formerrormessage = document.getElementById("formerrormessage");
const formsuccessmessage = document.getElementById("formsuccessmessage");
// by default the valid input fields are set to false so the user cannot submit the form if the input fields are passed by the regex (regular expression) then valid fields are set to true and the user can submit the form
let validname = false;
let validemail = false;
let validphone = false;
let validsubject = false;
let validmessage = false;
namefield.addEventListener("blur", (e) => {
  let regex = /^([a-zA-Z]){1,30}$/;
  let name = namefield.value;
  if (regex.test(name)) {
    console.log(`valid name`);
    errorname.innerHTML = ``;
    namefield.classList.remove("invalid");
    validname = true;
  } else {
    console.log(`name is invalid`);
    errorname.innerHTML = `invalid name`;
    namefield.classList.add("invalid");
    validname = false;
  }
});
emailfield.addEventListener("blur", (e) => {
  let regex = /^([\-_\.a-zA-Z0-9]+)@([\-_\.a-zA-Z0-9]+)\.([a-zA-Z]){1,30}$/;
  let email = emailfield.value;
  if (regex.test(email)) {
    console.log(`valid email id`);
    erroremail.innerHTML = ``;
    emailfield.classList.remove("invalid");
    validemail = true;
  } else {
    console.log(`email id is invalid`);
    erroremail.innerHTML = `invalid email id`;
    emailfield.classList.add("invalid");
    validemail = false;
  }
});
phonefield.addEventListener("blur", (e) => {
  let regex = /^([0-9]){10}$/;
  let phone = phonefield.value;
  if (regex.test(phone)) {
    console.log(`phone number is valid`);
    errorphone.innerHTML = ``;
    phonefield.classList.remove("invalid");
    validphone = true;
  } else {
    console.log(`phone number is invalid`);
    errorphone.innerHTML = `invalid phone number`;
    phonefield.classList.add("invalid");
    validphone = false;
  }
});
subjectfield.addEventListener("blur", (e) => {
  let regex = /^([a-zA-Z]){1,15}$/;
  let subject = subjectfield.value;
  if (regex.test(subject)) {
    console.log(`subject is valid`);
    errorsubject.innerHTML = ``;
    subjectfield.classList.remove("invalid");
    validsubject = true;
  } else {
    console.log(`subject is invalid`);
    errorsubject.innerHTML = `invalid subject`;
    subjectfield.classList.add("invalid");
    validsubject = false;
  }
});
messagefield.addEventListener("blur", (e) => {
  let regex = /^([a-zA-Z]){1,30}$/;
  let message = messagefield.value;
  if (regex.test(message)) {
    console.log(`message is valid`);
    errormessage.innerHTML = ``;
    messagefield.classList.remove("invalid");
    validmessage = true;
  } else {
    console.log(`message is invalid`);
    errormessage.innerHTML = `invalid message`;
    messagefield.classList.add("invalid");
    validmessage = false;
  }
});
// if all the fields are valid then we can submit the form and it will show success or error message depending upon the user's input
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validname && validemail && validphone && validsubject && validmessage) {
    console.log(`ok`);
    formsuccessmessage.style.display = "block";
    formerrormessage.style.display = "none";
    form.reset();
  } else {
    console.log(`not ok`);
    formsuccessmessage.style.display = "none";
    formerrormessage.style.display = "block";
    form.reset();
  }
});
