/**
 * Q6: Form – Simple Feedback Form Validation (Only JS Part)
 */
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameErr = document.getElementById("nameErr");
  let emailErr = document.getElementById("emailErr");
  let msgErr = document.getElementById("msgErr");

  nameErr.innerText = "";
  emailErr.innerText = "";
  msgErr.innerText = "";

  let valid = true;
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

  if (!nameRegex.test(name)) {
    nameErr.innerText = "Only alphabets allowed.";
    valid = false;
  }
  if (!emailRegex.test(email)) {
    emailErr.innerText = "Invalid email.";
    valid = false;
  }
  if (message.length < 20) {
    msgErr.innerText = "Message must be at least 20 characters.";
    valid = false;
  }
  return valid;
}