
var nums = [ 1,2,3,4,5,6,7,8,9,0 ];
var lowercas = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var uppercas = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  generatePassword()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt question to the user about the length of the password
var userChoice = prompt("Choose a password length");
// If in the criteria > 8 and <128
    if (userChoice < 8 || userChoice > 128) {
        alert("Choose a number between 8 and 128");
  } else {
        alert("Next step...confirm what would you want to include in your password:");

        // Confirm if user wants Lowercase
        var confirmLower = confirm("Lowercase?");
        // Confirm if user wants upperCase
        var confirmUpper = confirm("Uppercase?");
        // Confirm if user wants special chars
        var confirmSpecial = confirm("Special Character?");
        // Confirm if user wants numeric chars
        var confirmNum = confirm("Numeric Character?");
    
// Function to generate the password based on the confirmed additions by the user
    function generatePassword() {
        var password = []   
        for(var i = password.length; i < userChoice; i++) {
    
        // Check each of the statements above is true
        // if so bring a random character of for each confirmed

        console.log(password)
            if(confirmNum){
                var numeric = nums[Math.floor(Math.random() * nums.length)];
                password.push(numeric);   
            }
            if(confirmLower){
                var lower = lowercas[Math.floor(Math.random() * lowercas.length)];
                password.push(lower);
            }
            if(confirmUpper){
                var upper = uppercas[Math.floor(Math.random() * uppercas.length)];
                password.push(upper);

            }
            if(confirmSpecial){
                // getRandomSymbol();
                password.push(getRandomSymbol())
            }
        }   

        console.log(password)
        // Show the result without commas in between the elements
        NewPass = password.join("");
        // Only present the lentgh inputed by the user 
        var finalPassword = NewPass.slice(0, userChoice)
        return finalPassword
    }
    }

// Generate random symbol characters
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
