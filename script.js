// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){
  var password = "";
    var passwordLength = prompt("Please enter the desired length for passcode", "8-128");
    if (passwordLength >= 8 && passwordLength <= 128){
       var1 = passwordLength
    } else {
      alert("please enter a number 8-128")
      return;
    }
    var lCase = prompt("Do you want to include lower case letters?", "yes or no");
    if (lCase == "yes"){
      var2 = Boolean(true)
    } else if (lCase =="no"){
      var2 = Boolean(false)
    } else {
      alert("please enter 'yes' or 'no'")
      return;
    }
    var uCase = prompt("Do you want to include upper case letters?", "yes or no");
    if (uCase == "yes"){
      var3 = Boolean(true)
    } else if (uCase =="no"){
      var3 = Boolean(false)
    } else {
      alert("please enter 'yes' or 'no'")
      return;
    }
    var numeric = prompt("Do you want to include numbers in your passcode?", "yes or no");
    if (numeric == "yes"){
      var4 = Boolean(true)
    } else if (numeric =="no"){
      var4 = Boolean(false)
    } else {
      alert("please enter 'yes' or 'no'")
      return;
    }
    var specialChar = prompt("Do you want to include special characters in your passcode?", "yes or no");
    if (specialChar == "yes"){
      var5 = Boolean(true)
    } else if (specialChar =="no"){
      var5 = Boolean(false)
    } else {
      alert("please enter 'yes' or 'no'")
      return;
    }
    if (var2 == Boolean(true) && var3 == Boolean(true) && var4 == Boolean(true) && var5 == Boolean(true)){
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
     else if (var2 == Boolean(false) && var3 == Boolean(true) && var4 == Boolean(true) && var5 == Boolean(true)){
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } 
    else if (var2 == Boolean(false) && var3 == Boolean(false) && var4 == Boolean(true) && var5 == Boolean(true)){
      var str = "123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    else if (var2 == Boolean(false) && var3 == Boolean(false) && var4 == Boolean(false) && var5 == Boolean(true)){
      var str = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    else if (var2 == Boolean(false) && var3 == Boolean(false) && var4 == Boolean(false) && var5 == Boolean(false)){
      alert("please enter at least one character type!");
    }
    else if (var2 == Boolean(true) && var3 == Boolean(false) && var4 == Boolean(true) && var5 == Boolean(true)){
      var str = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } 
    else if (var2 == Boolean(true) && var3 == Boolean(false) && var4 == Boolean(false) && var5 == Boolean(true)){
      var str = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    else if (var2 == Boolean(true) && var3 == Boolean(false) && var4 == Boolean(false) && var5 == Boolean(false)){
      var str = "abcdefghijklmnopqrstuvwxyz";
    }
    else if (var2 == Boolean(true) && var3 == Boolean(true) && var4 == Boolean(true) && var5 == Boolean(false)){
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }
    else if (var2 == Boolean(true) && var3 == Boolean(true) && var4 == Boolean(false) && var5 == Boolean(false)){
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    else if (var2 == Boolean(false) && var3 == Boolean(true) && var4 == Boolean(false) && var5 == Boolean(false)){
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else if (var2 == Boolean(false) && var3 == Boolean(true) && var4 == Boolean(true) && var5 == Boolean(true)){
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    else if (var2 == Boolean(false) && var3 == Boolean(false) && var4 == Boolean(true) && var5 == Boolean(true)){
      var str = "0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    else if (var2 == Boolean(false) && var3 == Boolean(false) && var4 == Boolean(true) && var5 == Boolean(false)){
      var str = "0123456789";
    }
    else if (var2 == Boolean(true) && var3 == Boolean(false) && var4 == Boolean(true) && var5 == Boolean(false)){
      var str = "abcdefghijklmnopqrstuvwxyz0123456789";
    }
    else if (var2 == Boolean(true) && var3 == Boolean(true) && var4 == Boolean(false) && var5 == Boolean(true)){
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    for (i = 1; i <= var1; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      password += str.charAt(char) 
    
    }
    return password
}
passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
