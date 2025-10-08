/**
 * 
 * Q5: Regex – Strong Password Validator (Explained Simply)
 * Conditions: min 8 characters, 1 uppercase, 1 digit, 1 special character
 */

function validatePassword(password) {
  let hasUpper = /[A-Z]/.test(password);
  let hasDigit = /[0-9]/.test(password);
  let hasSpecial = /[!@#$%^&*]/.test(password);
  let isLong = password.length >= 8;

  return hasUpper && hasDigit && hasSpecial && isLong;
}

console.log("Welcome@2023: ", validatePassword("Welcome@2023")); // true
console.log("pass123: ", validatePassword("pass123")); // false