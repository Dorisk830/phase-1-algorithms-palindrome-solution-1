function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}
/*
  if word is palindrome it will return true
  reverse string reverses the word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log("Expecting: ih");
console.log("=>", reverseString("hi"));

console.log("");

console.log("Expecting: tobor");
console.log("=>", reverseString("robot"));

console.log("");

console.log("Expecting: mom");
console.log("=>", reverseString("mom"));
}

module.exports = isPalindrome;
