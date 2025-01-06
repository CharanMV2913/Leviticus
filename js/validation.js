function validateAllInputs() {
  // Define constants for border styles and file size limit
  const BORDER_ERROR = "1px solid red";
  const BORDER_DEFAULT = "1px solid #e5e1e1";
  // Get all input elements
  const inputs = document.querySelectorAll("input");
  let valid = true;

  // Loop through each input element
  inputs.forEach((input) => {
    const value = input.value.trim();
    const errorId = input.id + "Error";
    const errorElement = document.getElementById(errorId);

    if (value === "") {
      // Handle empty input
      input.style.border = BORDER_ERROR;
      let inputName=input.id[0].toUpperCase() + input.id.slice(1);
      errorElement.innerHTML = `${inputName} is required`;
      errorElement.style.display = "block";
      valid = false;
    } else {
      // Reset styles and hide error message for non-empty input
      input.style.border = BORDER_DEFAULT;
      errorElement.style.display = "none";
    }
  });

  if (!valid) return false;

  return formValidation();
}

function formValidation() {
  let valid = true;
  const BORDER_ERROR = "1px solid red";
  const BORDER_DEFAULT = "1px solid #e5e1e1";
  const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024; // 20 MB
  const ALLOWED_FILE_TYPES = ["pdf", "doc", "docx"];

  // Validate name input
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const nameValue = name.value;
  
  if (!/^[A-Za-z\s]+$/.test(nameValue)) {
    name.style.border = BORDER_ERROR;
    nameError.innerHTML = "Enter a valid name";
    nameError.style.display = "block";
    valid = false;
  } else {
    name.style.border = BORDER_DEFAULT;
    nameError.style.display = "none";
  }
  if (!valid) return valid;

  // Validate email input
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailValue = email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    email.style.border = BORDER_ERROR;
    emailError.innerHTML = "Please enter a valid email address";
    emailError.style.display = "block";
    valid = false;
  } else {
    email.style.border = BORDER_DEFAULT;
    emailError.style.display = "none";
  }
  if (!valid) return valid;

  // Validate phone input
  const phone = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phoneValue = phone.value;
  const phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phoneValue)) {
    phone.style.border = BORDER_ERROR;
    phoneError.innerHTML = "Please enter a valid phone number";
    phoneError.style.display = "block";
    valid = false;
  } else {
    phone.style.border = BORDER_DEFAULT;
    phoneError.style.display = "none";
  }
  if (!valid) return valid;

  // Validate file input (type and size)
  const resume = document.getElementById("resume");
  const resumeError = document.getElementById("resumeError");
  const fileType = resume.files[0].name.split(".").pop().toLowerCase();

  if (
    !ALLOWED_FILE_TYPES.includes(fileType) ||
    resume.files[0].size >= MAX_FILE_SIZE_BYTES
  ) {
    // Handle invalid file type or size
    resume.value = ""; // Clear the selected file
    resume.style.border = BORDER_ERROR;
    resumeError.innerHTML = "Please upload a PDF or DOC file (allowed limit 20 MB)";
    resumeError.style.display = "block";
    valid = false;
  } else {
    // Reset styles and hide error message for valid file
    resume.style.border = BORDER_DEFAULT;
    resumeError.style.display = "none";
  }

  return valid;
}
