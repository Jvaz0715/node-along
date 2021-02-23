const getInput = require("./get-input.js");

//take in our user's age, saving it in a variable
const userAge = getInput();


// check if they want help
if (userAge === "--help") {
    console.log('This function returns your mental age.');
    console.log('Please enter your age after "node mental-age.js" and a space.');
}

// divide it by 2 and add 3
const mentalAge = userAge / 2 + 3;
const ageNextYear = Number(userAge) + 1;
// print out the user's age in a sentence
console.log(`Your age is ${userAge} years old.`);
console.log(`Nexy year you'll be ${ageNextYear} years old.`);
//print out the user's mental age in a sentence
console.log(`But your mental age is ${mentalAge} years old.`);
