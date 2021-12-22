/* 
👉 Write your kata here!
1- Given a string, write a function that reverses the string
1 -Eg:
hello = olleh
brum = murb

2- Given the reversed strings, create an array that hosts the newly found strings
2- Eg:
[olleh, murb]

*/

//👉 Write the function your CodeWarriors will start with below here:

export function reverseString(word) {
  const reversing = word.split('').reverse().join('');
  console.log(reversing);
  return reversing;
}
//console.log(reverseString('best team ever'));
