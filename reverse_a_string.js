//this function reverse a string by first creating an array of each letter. then reverse the order of letters.
//then, joining the reversed letters back again to re-create the str in reverse

function reverseString(str) {
  string = str.split("");
  string = string.reverse();
  string2 = string.join('')
  return string2;
}

console.log(reverseString("hello")); 

function palindrome(str) {
  string1 = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  string2 = string1.toLowerCase();
  string3 = string2.split("");
  string4 = string3.reverse();
  string5 = string4.join("");
  if (str === string5) {
  	return true;
  } else {
	return "Not a palindrome";
 }
}
console.log(palindrome("eye"));








