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
const detailsform = document.querySelector(".formdesign");
const formerrormessage = document.getElementById("formerrormessage");
const formsuccessmessage = document.getElementById("formsuccessmessage");
const emailiduserexists = document.getElementById("emailiduserexists");
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
// if all the user inputs are valid then we can submit the form and it will show success or error message depending upon the user's input or if the existing emailid user tries to again register then it will get existing email id validation error
detailsform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validname && validemail && validphone && validsubject && validmessage) {
    formsuccessmessage.style.display = "block";
    formerrormessage.style.display = "none";
    console.log("ok");
    // ================= store user's details in localstorage =================
    let storename = namefield.value;
    let storeemail = emailfield.value;
    let storephone = phonefield.value;
    // ================= retrieve user's details from localstorage =================
    let formdatabase = new Array();
    formdatabase = JSON.parse(localStorage.getItem("formdata"))
      ? JSON.parse(localStorage.getItem("formdata"))
      : [];
    // ================= check for duplicate entries of user's existing email address =================
    if (
      formdatabase.some((duplicatedataentry) => {
        return duplicatedataentry.emailid === storeemail;
      })
    ) {
      emailiduserexists.style.display = "block";
      formsuccessmessage.style.display = "none";
    } else {
      let formdataentry = {
        name: storename,
        emailid: storeemail,
        phonenumber: storephone,
      };
      formdatabase.push(formdataentry);
      let storeformdata = localStorage.setItem(
        "formdata",
        JSON.stringify(formdatabase)
      );
      emailiduserexists.style.display = "none";
    }
    detailsform.reset();
  } else {
    formsuccessmessage.style.display = "none";
    formerrormessage.style.display = "block";
    detailsform.reset();
    console.log("not ok");
  }
});
