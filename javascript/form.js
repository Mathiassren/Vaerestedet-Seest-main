//Form
const contactForm = document.forms["contact"];

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = contactForm["ContactName"];
  const inputAddress = contactForm["ContactAddress"];
  const inputCity = contactForm["ContactCity"];
  const inputBirthday = contactForm["ContactBirthday"];
  const inputSchool = contactForm["ContactSchool"];
  const inputChildMobile = contactForm["ContactChildMobile"];
  const inputParent1 = contactForm["ContactParent1"];
  const inputParent2 = contactForm["ContactParent2"];
  const inputEmail1 = contactForm["ContactEmail1"];
  const inputEmail2 = contactForm["ContactEmail2"];
  const inputMobile1 = contactForm["ContactMobile1"];
  const inputMobile2 = contactForm["ContactMobile2"];

  if (inputName.value != "" && inputName.value.length > 3) {
    inputName.classList.remove("error");
    inputName.classList.add("valid");
  } else {
    inputName.classList.add("error");
    inputName.classList.remove("valid");
  }

  if (inputAddress.value != "" && inputAddress.value.length > 3) {
    inputAddress.classList.remove("error");
    inputAddress.classList.add("valid");
  } else {
    inputAddress.classList.add("error");
    inputAddress.classList.remove("valid");
  }

  if (inputCity.value != "" && inputCity.value.length > 3) {
    inputCity.classList.remove("error");
    inputCity.classList.add("valid");
  } else {
    inputCity.classList.add("error");
    inputCity.classList.remove("valid");
  }

  if (inputBirthday.value != "" && inputBirthday.value.length > 3) {
    inputBirthday.classList.remove("error");
    inputBirthday.classList.add("valid");
  } else {
    inputBirthday.classList.add("error");
    inputBirthday.classList.remove("valid");
  }

  if (inputSchool.value != "" && inputSchool.value.length > 3) {
    inputSchool.classList.remove("error");
    inputSchool.classList.add("valid");
  } else {
    inputSchool.classList.add("error");
    inputSchool.classList.remove("valid");
  }

  if (inputChildMobile.value != "" && inputChildMobile.value.length > 3) {
    inputChildMobile.classList.remove("error");
    inputChildMobile.classList.add("valid");
  } else {
    inputChildMobile.classList.add("error");
    inputChildMobile.classList.remove("valid");
  }

  if (inputParent1.value != "" && inputParent1.value.length > 3) {
    inputParent1.classList.remove("error");
    inputParent1.classList.add("valid");
  } else {
    inputParent1.classList.add("error");
    inputParent1.classList.remove("valid");
  }

  if (inputParent2.value != "" && inputParent2.value.length > 3) {
    inputParent2.classList.remove("error");
    inputParent2.classList.add("valid");
  } else {
    inputParent2.classList.add("error");
    inputParent2.classList.remove("valid");
  }

  if (
    inputEmail1.value != "" &&
    inputEmail1.value.includes("@") &&
    inputEmail1.value.includes(".dk")
  ) {
    inputEmail1.classList.remove("error");
    inputEmail1.classList.add("valid");
  } else {
    inputEmail1.classList.add("error");
    inputEmail1.classList.remove("valid");
  }

  if (
    inputEmail2.value != "" &&
    inputEmail2.value.includes("@") &&
    inputEmail2.value.includes(".dk")
  ) {
    inputEmail2.classList.remove("error");
    inputEmail2.classList.add("valid");
  } else {
    inputEmail2.classList.add("error");
    inputEmail2.classList.remove("valid");
  }

  if (inputMobile1.value != "" && inputMobile1.value.length > 3) {
    inputMobile1.classList.remove("error");
    inputMobile1.classList.add("valid");
  } else {
    inputMobile1.classList.add("error");
    inputMobile1.classList.remove("valid");
  }

  if (inputMobile2.value != "" && inputMobile1.value.length > 3) {
    inputMobile2.classList.remove("error");
    inputMobile2.classList.add("valid");
  } else {
    inputMobile2.classList.add("error");
    inputMobile2.classList.remove("valid");
  }

  if (
    inputEmail2.value != "" &&
    inputEmail2.value.includes("@") &&
    inputEmail2.value.includes(".dk")
  ) {
    inputEmail2.classList.remove("error");
    inputEmail2.classList.add("valid");
  }
});
