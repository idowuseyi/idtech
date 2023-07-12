/*
This is a javascriptfunction that check if a palindrome or not 
*/

function checkPalindrome(strings) {
  if (typeof(strings) != String) {
    console.log(typeof(strings) + " is not a string");
    return
  } else if (strings === "") {
    console.log(strings + " is an empty string");
    return
  } else {
    let newString = strings.replace(/[^a-z0-9]/gi, '');
  newString = newString.toLowerCase();
  reversedString = newString.split("").reverse().join("");
  if (newString == reversedString) {
    console.log("The sentence or word ==> " + strings + " is a palindrome");
  } else {
    console.log("The sentence or word ==> " + strings + " is not a palindrome")
  }
}
}
checkPalindrome("111");
checkPalindrome("");
checkPalindrome("check");
checkPalindrome("Mr.Owl ate my metal worm.");
checkPalindrome("Never odd or even.");
