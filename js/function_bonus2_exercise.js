"use strict";

// 21. Make a function named notZero(input) that returns true if the input is not zero

function notZero(input) {
    return input !== 0
}
console.log(notZero(1));
console.log(notZero(0));

// 22. Write a function named lowerCase(string)

function lowerCase(string) {

}

// 23. Write a function named double(n) that returns a number times two

function double(num) {
    return num * 2;
}
console.log(double(4));

// 24. Write a function named triple(n) that returns a number times 3

function triple(num) {
    return num * 3;
}
console.log(triple(4));


// 25. Write a function named quadruple(n) that returns a number times 4

function quadruple(num) {
    return num * 4;
}
console.log(quadruple(4));


// 26. Write a function named half(n) that returns 1/2 of the provided input

function half(num) {
    return num / 2;
}
console.log(half(10));

// 27. Write a function named subtract(a, b) that returns a minus b

function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 12));

// 28. Write a function named multiply(a, b) that returns the product of a times b

function multiple(a, b) {
    return a * b;
}
console.log(multiple(5, 6));

// 29. Write a function named divide(a, b) that returns a divided by b

function divide(a, b) {
    return a / b;
}
console.log(divide(100, 40));

// 30. Write a function named remainder(a, b) that returns the remainder after dividing a by b

function remainder(a, b) {
    return a % b;
}
console.log(remainder(11,3));

// 31. Make a function named modulo(a, b) that returns  the remainder after dividing a by b

// function modulo(a, b) {
//
// }

// 32. Write a function named cube(n) that returns n * n * n

function cube(num) {
    return num * num * num;
}
console.log(cube(3));

// 33. Write a function named squareRoot(n) that returns the square root of the input

function squareRoot(num) {
    return Math.sqrt(num)
}
console.log(squareRoot(25));

// 34. Write a function named cubeRoot(n) that returns the cube root of the input

function cubeRoot(num) {
    return Math.cbrt(num)
}
console.log(cubeRoot(27));

// 35. Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.

function invertSign(num) {
    return -num;
}
console.log(invertSign(-1));
console.log(invertSign(1));

// 36. Write a function named degreesToRadians(number)
function degreesToRadians(degrees) {
    var pi = Math.PI;
    return degrees * (pi/180);
}

console.log(degreesToRadians(45));

// 37. Write a function named radiansToDegrees(number)

function radiansToDegrees(radians) {
    var pi = Math.PI;
    return radians * (180/pi);
}
console.log(radiansToDegrees(0.7853981633974483));


// 38. Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.

// function isBlank(input) {
//
// }

// 39. Make a function named trim(string) that removes empty spaces before and after the input.

function trim(string) {
    return string.trim();
}
console.log(trim("  strgger  "));
console.log(trim("strgger"));

// 40. Make a function named areEqual(input1, input2) that returns if both inputs have the same value

function areEqual(input1, input2) {
    return input1 === input2;
}
console.log(areEqual(4,5));
console.log(areEqual(5,5));





