/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Player items
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You are on an adventure!");
console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {

  console.log("You head toward the mountains...");

  if (hasTorch && hasCompass) {
    console.log("With your torch and compass, you confidently explore deep into the mountains.");

    if (hasSword) {
      console.log("A wild beast appears, but you defeat it with your sword!");
    } else {
      console.log("A wild beast appears, and you have no weapon. You run away!");
    }

  } else if (hasTorch && !hasCompass) {
    console.log("You can see with your torch, but without a compass, you get a bit lost.");

  } else if (!hasTorch) {
    console.log("It's too dark in the mountains. You decide to turn back.");
  }

} else if (choice === "village") {

  console.log("You walk toward the village...");

  if (hasMap || hasCompass) {
    console.log("Using your navigation tools, you easily find the village.");

    const action = readline.question("Do you 'rest' at the inn or 'explore' the market? ");

    if (action === "rest") {
      console.log("You rest and regain your energy. Great choice!");
    } else if (action === "explore") {
      if (hasSword) {
        console.log("You protect a merchant from thieves and earn a reward!");
      } else {
        console.log("You explore the market safely and enjoy the sights.");
      }
    }

  } else {
    console.log("Without a map or compass, you get lost before reaching the village.");
  }

} else {
  console.log("Invalid choice. You stand still and the adventure ends.");
}

