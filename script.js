// Array of Special Characters 
var generateBtn = document.querySelector("#generate");


var specialCharacters = [
  '@',
  '%',
  '+',
  '=',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array for Numeric Characters 

var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

// Array of Lower Case Characters 

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array for Upper Case Characters

var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

function passwordLength(){

 var length = prompt('How long would you like your password to be? (8-128 characters for best security)')

 if (length < 8 || length > 128) {
   alert('Please provide a length greater than 8 and less than 128!')
   return passwordLength();
 }
 return parseInt(length);

}

function getUserOptions() {


  var userChoices = {
    combinedChars: [],
    hasUpperCase: confirm('Do you want Upper case characters?'),
    hasLowerCase: confirm('Do you want Lower case characters?'),
    hasSpecialChars: confirm('Do you want Special characters?'),
    hasNumericChars: confirm('Do you want Numeric Characters?')
  };

  if (userChoices.hasUpperCase){
    userChoices.combinedChars = userChoices.combinedChars.concat(upperCase)
  }

  if (userChoices.hasLowerCase){
    userChoices.combinedChars = userChoices.combinedChars.concat(lowerCase)
  }

  if (userChoices.hasSpecialChars){
    userChoices.combinedChars = userChoices.combinedChars.concat(specialCharacters)
  }

  if (userChoices.hasNumericChars){
    userChoices.combinedChars = userChoices.combinedChars.concat(numericCharacters)
  }

  return userChoices;

  
}

function generateRandom(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}


function generatePassword() {
  
  var length = passwordLength();
  var charArr = getUserOptions();

  function password() {

    var storage = [];

    var result = '';

    while (storage.length != length) {
      storage.push(generateRandom(charArr.combinedChars))
    }
    if (charArr.hasUpperCase){
      if (!storage.some((idx)=>upperCase.indexOf(idx)>0)){
        return password();
      }
    }

    if (charArr.hasLowerCase){
      if (!storage.some((idx)=>lowerCase.indexOf(idx)>0)){
        return password();
      }
    }

    if (charArr.hasSpecialChars){
      if (!storage.some((idx)=>specialCharacters.indexOf(idx)>0)){
        return password();
      }
    }

    if (charArr.hasNumericChars){
      if (!storage.some((idx)=>numericCharacters.indexOf(idx)>0)){
        return password();
      }
    }
    result = storage.join('');
    return result; 
    
  }
  return password();
}







// Write password to the #password input
function writePassword() {


  // Get user options
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
