// Set all variables

// Set lowercase values
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Set uppercase values
let upperCase = lowerCase.map((element) => {
  return element.toUpperCase();
});
// Set numeric values
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Set symbol values
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// Grabbing the password button
let generateBtn = document.querySelector("#generate");
// Create function to generate password
function generatePassword(
  characterAmount,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  let characterCodes = [];
  // Creating a large array of values based on user selection
  if (includeUppercase) characterCodes = characterCodes.concat(upperCase);
  if (includeLowercase) characterCodes = characterCodes.concat(lowerCase);
  if (includeNumbers) characterCodes = characterCodes.concat(numbers);
  if (includeSymbols) characterCodes = characterCodes.concat(symbols);
// Randomly choose an amount of values and multiply it by character length
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const charCode =
      characterCodes[Math.floor(Math.random() * characterCodes.length)];
    passwordCharacters.push(charCode);
  }
  return passwordCharacters.join("");
}

function writePassword(choseNumber) {
  // Confirm that  user is only entering numeric values between 8-128
  const characterConversion = parseInt(
    prompt("How many characters would you like?")
  ); 
 if (isNaN(characterConversion) || characterConversion >= 128 || characterConversion <= 8) {
    alert("Sorry, please enter a numeric value between 8-128");
    return;
  } else {
    const characterAmount = characterConversion; 
  
    //Creating the prompt for uppercase
    const includeUppercase = confirm(
      "Would you like uppercase letters in your password?"
    );
    //Creating the prompt for lowercase
    const includeLowercase = confirm(
      "Would you like lowercase letters in your password?"
    );
    //Creating the prompt for numbers
    const includeNumbers = confirm("Would you like numbers in your password?");
    //Creating the prompt for symbols
    const includeSymbols = confirm("Would you like symbols in your password?");
    // Storing generatePassword function as a variable.
    const password = generatePassword(
      characterAmount,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);