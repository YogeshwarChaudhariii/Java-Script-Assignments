/**
 * Q2: String – Username Generator
 */
let fullName = "   Ravi Kumar   ";
fullName = fullName.trim().toLowerCase();

let spaceIndex = fullName.indexOf(" ");
let firstName = fullName.substring(0, spaceIndex);
let lastName = fullName.substring(spaceIndex + 1);

let username = firstName + lastName.slice(-3);
console.log("Generated username:", username);
