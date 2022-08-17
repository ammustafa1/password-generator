function generatePassword() {

  // Prompts user for password length and checks if the input was a number
  var userInput = window.prompt("Password Length?");
  var passwordLength = parseInt(userInput, 10);
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters");
    return;
  }

  var passwordNumbers = window.confirm("Does the password require numbers?");
  var passwordSpecialCharacters = window.confirm("Does the password require special characters?");
  var passwordUppercaseLetters = window.confirm("Does the password require uppercase letters?");
  var passwordLowercaseLetters = window.confirm("does the password require lowercase letters?");

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharacters = [".", ",", ":", "?", "=", "-", "(", ")", "/", "%", "@", "!", "&", "$", "#", "*",];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

  var passwordElement = [];

  if (passwordNumbers) {
    passwordElement.push(numbers);
  }

  if (passwordSpecialCharacters) {
    passwordElement.push(specialCharacters);
  }

  if (passwordUppercaseLetters) {
    passwordElement.push(upperCase);
  }

  if (passwordLowercaseLetters) {
    passwordElement.push(lowerCase);
  }

  if (passwordElement.length === 0) {
    window.alert("a minimum of one password element must be selected")
  }

  var passwordArrays = [].concat.apply([], passwordElement);

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordArrays.length);
    password = password + passwordArrays[randomNumber];
  }

  return password;
}

var generateBtn = document.querySelector("#generate");

function passwordOutput() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", passwordOutput);
