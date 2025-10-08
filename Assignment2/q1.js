/**
 * Q1: Array – Fruit Market Billing (No filter used)
 */
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let appleCount = 0;
let bananaCount = 0;
let finalList = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    appleCount++;
  } else if (fruits[i] === "banana") {
    bananaCount++;
  }

  if (fruits[i] !== "orange") {
    finalList.push(fruits[i]);
  }

//   let noOrange = fruits.filter((fruit) => fruit !== "orange");
//   console.log(noOrange);
}

console.log("Apples sold:", appleCount);
console.log("Bananas sold:", bananaCount);
console.log("Final list:", finalList);
