function isPalindrome(word) {
  // Write your algorithm here
  for (let i=0; i<word.length /2; i++) {   
    const j = word.length - 1 -[i]
     return word[i] === word[j]
  }
}
/* 
  Add your pseudocode here
  Iterate to the middle of a word
   if the every first letter = last letter 
    return true

  return false  

 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
