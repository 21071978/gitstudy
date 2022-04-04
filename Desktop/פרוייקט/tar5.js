
let wordToCheck = prompt("enter word to check palindrom");
wordToCheck=wordToCheck.trim();
let i = wordToCheck.length - 1;
let j = 0;
let isPalindrom = true;
if (wordToCheck.length < 2 || wordToCheck==undefined) isPalindrom = false;
while (isPalindrom && i - j > 1) {
        if (wordToCheck.charAt(i) != wordToCheck.charAt(j))
        isPalindrom = false;
    i--; j++



}
console.log("Is palindrom?  " + isPalindrom);

