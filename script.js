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
 return parseInt(length)

}



// get random element from array 

//function getRandom() {
  //var arrIndex = Math.floor(Math.random() * arr.length);
  //var arrElement = arr(arrIndex);

  //return arrElement
//}



function generatePassword() {
  
  var options = getUserOptions()
  var potentialChars = [];
  var mustHaveChars = [];
  var passwordArr = [];

  //// if userChoices.upperCase === true 
  //// musthavechars.push(random char from array)

  if (options.upperCase === true){
    potentialChars = potentialChars.concat(upperCase);
    mustHaveChars.push(getRandom(upperCase));
  }
  
//// if userChoices.lowerCase === true 
  //// musthavechars.push(random char from array)

  if (options.lowerCase === true){
    potentialChars = potentialChars.concat(lowerCase);
    mustHaveChars.push(getRandom(lowerCase))
    
  }

//// if userChoices.specialCharacters === true 
  //// musthavechars.push(random char from array)

  if (options.specialCharacters === true){
    potentialChars = potentialChars.concat(specialCharacters);
    mustHaveChars.push(getRandom(specialCharacters))
  }
//// if userChoices.numericCharacters === true 
  //// musthavechars.push(random char from array)

  if (options.numericCharacters === true){
    potentialChars = potentialChars.concat(numericCharacters);
    mustHaveChars.push(getRandom(numericCharacters))
  }

//// loop to the length of the asked for password
  //// push from potentialChars to PasswordArray 

  for (var i=0; i<options.length; i++){
    var potentialChar = getRandom(potentialChars)
    passwordArr.push(potentialChar)
  }


////loop through mustHaveChars
  //// replace for each one in the passwordArray;

  for (var i=0; i<mustHaveChars.length; i++){
    passwordArr[i] = mustHaveChars[i]
  }

   //// join array to string

  return passwordArr.join('')

  
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

  //ask for length
  //var length = prompt('How long would you like your password to be? (between 8-128 for best security)')
  
  // sign to userOptions
   //userChoices.length = length;

   //var upperCase = confirm('Do you want Upper case characters?')

   // sign to userOptions
   //userChoices.upperCase = upperCase;

   //var lowerCase = confirm('Do you want Lower case characters?')

   //userChoices.lowerCase = lowerCase;

   //var specialCharacters = confirm('Do you want Special characters?')

   //userChoices.specialCharacters = specialCharacters;

   //var numericCharacters = confirm('Do you want Numeric Characters?')

   //userChoices.numericCharacters = numericCharacters;

  
   //return userChoices;
  
}
// Write password to the #password input
function writePassword() {


  // Get user options
  var userChoices = getUserOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);