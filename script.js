// exe 1
// Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
// console.log(calFahrenheit(20)) //68
const calFahrenheit = (num) => {
  return num * (9 / 5) + 32;
};
console.log(calFahrenheit(20));

// exe 2
// Write a function to reverse a number
// console.log(reverseNum(123)) //321
const reverseNum = (num) => {
  let str = num.toString().split("").reverse().join("").toString();

  return +str;
};
console.log(reverseNum(123));

// exe 3
// Count number of Vowels in String
// Function `countVowel` returns the number of vowels in input string.
// console.log(countVowel("Hello")) //2

const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}
console.log(countVowel("Hello"));

// exe 4
// Write a function to check if an input string is a palindrome
// Function `checkPalindrome` return a boolean value based on whether the input string is palindrome or not.
// a palindrome is a word, phrase or number which reads the same backwards as it does when being read forwards.
// console.log(findPalindrome("racecar")) //true
const findPalindrome = (word) => {
  let check = word.toString().split("").reverse().join("");
  if (word === check) {
    return true;
  }
  return false;
};
console.log(findPalindrome("racecar"));

// exe 5
// Write a function to generate a random number
// Function `genRandom` return a generated random integer number between the provided start and end range.
// console.log(genRandom(1,10)) // random int between 1 to 10

const genRandom = (x, y) => {
  return Math.round(Math.random() * (y - x) + x);
};

console.log(genRandom(1, 10));

// exe 6
// Write a function to find Factorial of a number
// Function `getFactorial` return the factorial of a number using the formula `n*(n-1)*(n-2)*…` .
// console.log(getFactorial(5)) // 120

const getFactorial = (num) => {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * getFactorial(num - 1);
  }
};
console.log(getFactorial(5));

// exe 7
// Write a function to add unlimited numbers
// Function `addNumber()` return the sum of all the number passed as arguments of the function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// console.log(addNumber(10,45,34,130)) // 219

const addNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(addNumber([10, 45, 34, 130]));
