"use strict";
// 1. Make a function named isOdd(number)

function isOdd(num) {
    return (num % 2 === 0)  === false;
}
console.log(isOdd(4));
console.log(isOdd(3));


// 2. Make a function named isEven(number)

function isEven(num) {
    return(num % 2 === 0) === true;
}
console.log(isEven(20));
console.log(isEven(21));

// 3. Make a function named identity(input) that returns the input exactly as provided.
var text = "Meghan";
function identity(input) {
    if(input !== text) {
        console.log("Identities do not match!")
    } else {
        console.log("Identities match!")
    }
}
identity("Meghan");


// 4. Make a function named isFive(input)

function isFive(input) {
    return input === 5;
}
console.log(isFive(5));
console.log(isFive(7));

// 5. Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return input + 5;
}
console.log(addFive(48));

// 6. Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
    return input % 5 === 0}

console.log(isMultipleOfFive(4));
console.log(isMultipleOfFive(20));

// 7. Make a function named isThree(input)

function isThree(input) {
        return input === 3
    }
    console.log(isThree(4));
    console.log(isThree(3));

// 8. Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input) {
    return input % 3 === 0
    }
console.log(isMultipleOfThree(6));
console.log(isMultipleOfThree(7));

// 9. Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(input) {
    return (input % 3 === 0) && (input % 5 === 0)

}
console.log(isMultipleOfThreeAndFive(30));
console.log(isMultipleOfThreeAndFive(14));

// 10. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n) {
    return target % n === 0
}
console.log(isMultipleOf(30, 5));
console.log(isMultipleOf(29, 5));

// 11. Make a function named isTrue(boolean)

function isTrue(boolean) {
    return boolean === true;
}
console.log(isTrue(true));
console.log(isTrue(1));

// // 12. Make a function named isFalse(boolean)

function isFalse(boolean) {
    return boolean === false;
}
console.log(isFalse(true));
console.log(isFalse(1));

// 13. Make a function named isTruthy(input), remember that values other than true will behave like true

function isTruthy(input) {

}

// 14. Make a function named isFalsy(input), remember that values other than false behave like false

function isFalsy(input) {

}

// 15. Make a function named isVowel(letter)
function isVowel(letter) {
    var letters = ["a","e","i","o","u","A","E","I","O","U"];
    return letters.indexOf(letter) > -1

    }
console.log(isVowel('E'));
console.log(isVowel('a'));

// 16. Make a function named isConsonant(letter)

function isConsonant(letter) {
    var letters = ["b","d","f","g","h","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
    return letters.indexOf(letter) > -1
}
console.log(isConsonant('G'));
console.log(isConsonant('g'));

// 17. Make a function named isCapital(letter)

function isCapital(letter) {
    return letter == letter.toUpperCase();
}
console.log(isCapital('F'));
console.log(isCapital('g'));

// 18. Make a function named isLowerCase(letter)

function isLowerCase(letter) {
    return letter == letter.toLowerCase();
}
console.log(isLowerCase('F'));
console.log(isLowerCase('g'));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

function hasLowerCase(string) {
    var stringBool = true;
    for(var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
        stringBool = true;
        break;
    } else {
        stringBool = false;
        }
    }
    return stringBool;
}
console.log(hasLowerCase("FUNcT"));
console.log(hasLowerCase("FUNCT"));

// 19. Make a function named isSpace(letter) that returns if a character is a space character

function isSpace(letter) {
    return letter === " ";
}
console.log(isSpace("FUNcT"));
console.log(isSpace(" "));


// 20. Make a function named isZero(number)

function isZero(num) {
    return num === 0
}
console.log(isZero(0));
console.log(isZero(1));