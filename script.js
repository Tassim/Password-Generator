
var nums = [ 1,2,3,4,5,6,7,8,9,0 ];
var lowercas = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var uppercas = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
generatePassword()

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// When use click the button
// Prompt question to the user about the length of the password
var userChoice = prompt("Choose a password length");
// If in the criteria > 8 and <128
    if (userChoice < 8 || userChoice > 128) {
        alert("Choose a number between 8 and 128");
  } else {
        alert("Now, confirm if you want in your password:");
  }

// Confirm if user wants Lowercase
var confirmLower = confirm("Lowercase?");
// Confirm if user wants upperCase
var confirmUpper = confirm("Uppercase?");
// Confirm if user wants special chars
var confirmSpecial = confirm("Special Character?");
// Confirm if user wants numeric chars
var confirmNum = confirm("Numeric Character?");

function generatePassword() {

    var password = []
    for(var i = password.length; i < userChoice;) {
    // Check each of the statements above is true
    console.log(i)
    console.log(password)
        if(confirmNum === true && i < userChoice); {
            var numeric = nums[Math.floor(Math.random() * nums.length)];
            i++;
            password.push(numeric);
            console.log("confirmNum");    
        }
        if(confirmLower === true && i < userChoice);{
            var lower = lowercas[Math.floor(Math.random() * lowercas.length)];
            i++;
            password.push(lower);
            console.log("lower"); 
        }
        if(confirmUpper === true && i < userChoice);{
            var upper = uppercas[Math.floor(Math.random() * uppercas.length)];
            i++;
            password.push(upper);
            console.log("upper")
        }
        if(confirmSpecial === true && i < userChoice);{
            i++;
            // getRandomSymbol();
            password.push(getRandomSymbol())
            console.log("symbol");
        }
    }
    console.log(password)
    NewPass = password.join("");
    return NewPass
}

// // choose one random numeber from the array
// var numeric = nums[Math.floor(Math.random() * nums.length)];
// console.log(numeric);


// Generate random characters and add it to userPass
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
