/**
 * Q4: Math – Dice Game Simulator
 */
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let sum = dice1 + dice2;

console.log("Dice 1:", dice1);
console.log("Dice 2:", dice2);
console.log("Sum:", sum);

if(sum % 2 === 0){
    console.log("YOU WIN!!");
}
else {
    console.log("TRY AGAIN...");
}