"use strict";

function isNumberPositive(number) {
  if (number < 0) {
    return false;
  }

  return true;
}

function convertDaysToAge(days) {
  return Math.floor(days / 356);
}

function getLargestNumber(a, b, c) {
  if (a > b & a > c) {
    return a;
  } else if (b > a & b > c) {
    return b;
  }

  return c;
}

function getLastName(names) {
  return names[names.length - 1];
}

function allNumbersPositive(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return false;
    }
  }

  return true;
} //tests


console.log(isNumberPositive(-1)); // returns false

console.log(isNumberPositive(100)); // returns true

console.log(convertDaysToAge(1095)); // returns 3

console.log(convertDaysToAge(3650)); // returns 10

console.log(getLargestNumber(1, 0, 3)); // returns 3

console.log(getLargestNumber(5, 5, 1)); // returns 5

console.log(getLastName(["John", "Bob", "Tom"])); // returns "Tom"

console.log(getLastName(["Alex", "Ben"])); // returns "Ben"

console.log(allNumbersPositive([10, 15, 25])); // returns true

console.log(allNumbersPositive([-1, 10, 12])); // returns false