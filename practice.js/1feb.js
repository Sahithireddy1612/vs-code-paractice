
//1.create a function that takes two numbers and returns their sum.
function addNumbers (num1,num2) {
    return num1+num2
}
var result= addNumbers (5,9);
console.log(result);

 //2.write a program to print the sum of of the digits in the number.
function sumOfDigits(number) {
    // Convert the number to a string to iterate through its digits
    const digits = String(number).split('');
  
    // Use reduce to sum up the digits, converting them back to numbers
    const digitSum = digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  
    return digitSum;
  }
  
  // Test case:
  const inputNumber = 101;
  const result = sumOfDigits(inputNumber);
  console.log(`The sum of digits in ${inputNumber} is: ${result}`);
   // Test case:
   const inputNumber = 567;
   const result = sumOfDigits(inputNumber);
   console.log(`The sum of digits in ${inputNumber} is: ${result}`);

   //3.write a program to print reverse of the given number
   function reverseNumber(number) {
    // Convert the number to a string, split it into an array, reverse it, and join back
    const reversedString = String(number).split('').reverse().join('');
  
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedString, 10);
  
    return reversedNumber;
  }
  
  // Test case:
  const inputNumber = 721;
  const reversedResult = reverseNumber(inputNumber);
  console.log(`The reverse of ${inputNumber} is: ${reversedResult}`);
   // Test case:
   const inputNumber = ;765
   const reversedResult = reverseNumber(inputNumber);
   console.log(`The reverse of ${inputNumber} is: ${reversedResult}`);

  //4.write a program to print factorial of the number.
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1; // Factorial of 0 and 1 is 1
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Test case:
  const inputNumber = 3;
  const result = factorial(inputNumber);
  console.log(`The factorial of ${inputNumber} is: ${result}`);
  
  // Test case:
  const inputNumber = 4;
  const result = factorial(inputNumber);
  console.log(`The factorial of ${inputNumber} is: ${result}`);

  //5.write a programming to print middle characters in the given string or number.
  function middleCharacters(input) {
    const length = input.length;
  
    // Check if the length is odd or even
    if (length % 2 === 0) {
      // If even, return two middle characters
      const middleIndex1 = length / 2 - 1;
      const middleIndex2 = length / 2;
      return input.slice(middleIndex1, middleIndex2 + 1);
    } else {
      // If odd, return the single middle character
      const middleIndex = Math.floor(length / 2);
      return input.charAt(middleIndex);
    }
  }
  
  // Test case:
  const inputString = "wonder";
  const middleChars = middleCharacters(inputString);
  console.log(`The middle characters of "${inputString}" are: ${middleChars}`);
  // Test case:
  const inputString = "world";
  const middleChars = middleCharacters(inputString);
  console.log(`The middle characters of "${inputString}" are: ${middleChars}`);
  // Test case:
  const inputString = "6996";
  const middleChars = middleCharacters(inputString);
  console.log(`The middle characters of "${inputString}" are: ${middleChars}`);

  //6.write a program to check whether the sum of digits in the number except first digit and digit and digit is equal to sum of first digit and last digit of that
  //number.If both the sums are equal then print equal otherwise print not equal. 
  function checkSumEquality(number) {
    const digits = String(number).split('').map(digit => parseInt(digit, 10));
  
    // Check if the number has at least three digits
    if (digits.length < 3) {
      return "Not enough digits to compare";
    }
  
    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];
  
    // Calculate sum of digits excluding the first and last
    const middleDigitSum = digits.slice(1, -1).reduce((sum, digit) => sum + digit, 0);
  
    // Check if the sums are equal
    if (middleDigitSum === (firstDigit + lastDigit)) {
      return "Equal";
    } else {
      return "Not Equal";
    }
  }
  
  // Test case:
  const inputNumber = 75547;
  const result = checkSumEquality(inputNumber);
  console.log(`For the number ${inputNumber}, the sums are ${result}.`);
  // Test case:
  const inputNumber = 765;
  const result = checkSumEquality(inputNumber);
  console.log(`For the number ${inputNumber}, the sums are ${result}.`);

  //7.write a program to  check whether the digits in-between the first and last digit are less than first and last digit,if yes then print true otherwise print false. 
  function checkDigitsInBetween(number) {
    const digits = String(number).split('').map(digit => parseInt(digit, 10));
  
    // Check if the number has at least three digits
    if (digits.length < 3) {
      return "Not enough digits to compare";
    }
  
    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];
  
    // Get the digits in-between the first and last digit
    const inBetweenDigits = digits.slice(1, -1);
  
    // Check if all digits in-between are less than the first and last digit
    const allLessThan = inBetweenDigits.every(digit => digit < firstDigit && digit < lastDigit);
  
    return allLessThan;
  }
  
// Test case:
const inputNumber = 1672;
const result = checkDigitsInBetween(inputNumber);
console.log(`For the number ${inputNumber}, the digits in-between are less: ${result}`);

// Test case:
const inputNumber = 84719;
const result = checkDigitsInBetween(inputNumber);
console.log(`For the number ${inputNumber}, the digits in-between are less: ${result}`);

//8.write a program to print the vowels in the given string  in reverse order. with testcase:Helloworld
function reverseVowels(inputString) {
    const vowels = 'aeiouAEIOU';
    const vowelsArray = inputString.split('').filter(char => vowels.includes(char));
  
    // Reverse the array of vowels
    const reversedVowels = vowelsArray.reverse().join('');
  
    return reversedVowels;
  }
  
  
  // Test case:
  const inputString = "JackspArrow";
  const result = reverseVowels(inputString);
  console.log(`The vowels in reverse order from "${inputString}" are: ${result}`);

  //9.write a program to print the vowels in the given string  and repeated vowel should be printed only single time.with testcase;Helloworld
  function uniqueVowels(inputString) {
    const vowels = 'aeiouAEIOU';
    const uniqueVowelsSet = new Set();
  
    for (const char of inputString) {
      if (vowels.includes(char)) {
        uniqueVowelsSet.add(char.toLowerCase()); // Convert to lowercase to consider case-insensitive uniqueness
      }
    }
  
    const uniqueVowels = Array.from(uniqueVowelsSet).join('');
  
    return uniqueVowels;
  }
  
  // Test case:
  const inputString = "Helloworld";
  const result = uniqueVowels(inputString);
  console.log(`The unique vowels from "${inputString}" are: ${result}`);
  // Test case:
  const inputString = "JackspArrow";
  const result = uniqueVowels(inputString);
  console.log(`The unique vowels from "${inputString}" are: ${result}`);

  //10.