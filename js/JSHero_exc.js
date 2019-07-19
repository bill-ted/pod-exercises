var firstname = 'Lata';

// 'Geeta'

var flower = 'rose';
var tree = 'maple';

// 'Toe'

//'Hardy'

var hello = function() {
    return 'Hello world!';
};

var a = function() {
    return 'Hello a!';
};
var b = function() {
    return 'Hello b!';
};

function greet() {
    return 'Haydo!';
}
var salutation = greet();

// 'Hi!'

function echo(input) {
    return input;
}

// 'How do you do?'

function greet(input) {
    return 'Hello ' + input + '!';
}

// 'Where is Jacky?'

// 'Hi Selva! Hi Pola!'

function log() {
    return console.log('Hello Console!');
}

function log(input) {
    console.log(input);
}

function shout(input) {
    console.log(input + input);
    return input + input;
}

// 'Roy and Roy'

function length(string){
    return string.length
}

function toCase(string){
    return string.toLowerCase() + '-' + string.toUpperCase()
}

function shortcut(strA,strB) {
    return strA.charAt(0) + strB.charAt(0)
}

function firstChar(string) {
    return string.trim().charAt(0)
}

function indexOfIgnoreCase(strA, strB) {
    return strA.toLowerCase().indexOf(strB.toLowerCase())
}

function secondIndexOf(strA,strB) {
    var f1 = strA.indexOf(strB);
    return strA.indexOf(strB,f1+1);
}

function firstWord(string) {
    var blank = string.indexOf(' ');
    return string.substr(0,blank)
}

function normalize(string) {
    return string.replace(/-/g,'/')
}

function add(n1,n2) {
    return n1 + n2
}

//7

function toFahrenheit(num) {
    var fah = (1.8 * num) + 32;
    return fah
}

function onesDigit(num) {
    return num%10
}

function mean(n1,n2) {
    return (n1 + n2) / 2
}

function hypotenuse(n1,n2) {
    var csquare = Math.pow(n1, 2) + Math.pow(n2,2);
    return Math.sqrt(csquare);
}

function midrange(n1,n2,n3) {
    var min = Math.min(n1,n2,n3);
    var max = Math.max(n1,n2,n3);
    return (min + max) /2
}

//round 2

function area(num) {
    var diam = num * num;
    return diam * Math.PI
}

function toArray(strA,strB) {
    var arr = [];
    arr.push(strA);
    arr.push(strB);
    return arr
}

function getFirstElement(arr) {
    return arr[0];
}

function setFirstElement(arr, x) {
    arr[0] = x;
    return arr
}

function getLastElement(arr) {
    var last = arr.length-1;
    return arr[last]
}
