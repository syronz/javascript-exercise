'use strict'

/*
console.log("es6 loaded successfully");

(function() {
    var tmp = "I'm tmp";
    console.log(tmp);
}());

//console.log(tmp);

{
    let tmp = "I'm tmp2";
}
    //console.log(tmp);
*/


/* map
const arr = [1,2,3];
const square = arr.map(x => x * x);
console.log(arr, square);
*/


/* multi return regex 

const [a, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2020-12-11');
console.log(a, year, month, day);

*/


/* variables inside the curly bracket
var obj = { foo: 123 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(propDesc);
var writable2 = propDesc.writable;
var configurable2 = propDesc.configurable;
console.log(propDesc, writable2, configurable2); // true true



const obj2 = { foo: 123 };

//const {writable, configurable} = Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable2, configurable2); // true true

const one = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(one);

*/


/* for of
const arr = ['a', 'b', 'c'];
console.log(arr, arr.entries());

for (const elem of arr) {
    console.log(elem);
}

for (const [index, elem] of arr.entries()) {
    console.log(`${index} ${elem}`);
}
*/



/* spread parameter 

const max = Math.max(...[-1, 5, 3, 2]);
console.log(max);

*/


/* array push 

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);

console.log(arr1, arr2);

*/


/* method definition

const obj = {
    foo() {
        console.log('I am foo');
    },
    bar() {
        this.foo();
    }
}

obj.foo();
obj.bar();

*/


/* class with constr
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.describe = function () {
//     return 'Person called '+this.name;
// };


*/

/* class and sub class

class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'Person called '+this.name;
    }
}

const diako = new Person('diako');
console.log(diako.describe());



class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}

const ako = new Employee('ako', 'businessman');
console.log(ako.describe());

*/

/* map
const map = new Map();
function countWords(word) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
}

countWords('daman');
countWords('saman');

countWords('kaman');
countWords('kaman');
countWords('kaman');
countWords('kaman');
countWords('raman');


console.log(map);
*/


/* strings function 
const str = '132x321';
console.log(str.indexOf('x'));
console.log(str.startsWith('x'));
console.log(str.endsWith('x'));
console.log(str.includes('x'));
console.log('#'.repeat(3));
*/

/* arr rest
const arr1 = [...'abc'];
    // ['a', 'b', 'c']
const arr2 = [...new Set().add('a').add('b')];
    // ['a', 'b']

const arr3 = new Array(2).fill(undefined);
    // [undefined, undefined]
*/


// console.log(Number.EPSILON, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// > Math.sign(-8)
// -1
// > Math.sign(0)
// 0
// > Math.sign(3)
// 1

// > Math.trunc(3.1)
// 3
// > Math.trunc(3.9)
// 3
// > Math.trunc(-3.1)
// -3
// > Math.trunc(-3.9)
// -3

/*
Math.log10(100);
//2

Math.hypot(3, 4)
//5   


console.log(255..toString(16));
console.log(255..toString(2));
console.log(255..toString(8));
console.log(255..toString(10));
*/


// console.log('\u{1F680}');    // ES6: single code point
// console.log('\uD83D\uDE80'); // ES5: two code units

// const str = String.raw`Not a newline: \n`;
// console.log(str === 'Not a newline: \\n'); // true

// const mySymbol = Symbol('noWay');
// console.log(mySymbol);

// usage of symbol

// const COLOR_RED    = Symbol('Red');
// const COLOR_ORANGE = Symbol('Orange');
// const COLOR_YELLOW = Symbol('Yellow');
// const COLOR_GREEN  = Symbol('Green');
// const COLOR_BLUE   = Symbol('Blue');
// const COLOR_VIOLET = Symbol('Violet');

// function getComplement(color) {
//     switch (color) {
//         case COLOR_RED:
//             return COLOR_GREEN;
//         case COLOR_ORANGE:
//             return COLOR_BLUE;
//         case COLOR_YELLOW:
//             return COLOR_VIOLET;
//         case COLOR_GREEN:
//             return COLOR_RED;
//         case COLOR_BLUE:
//             return COLOR_ORANGE;
//         case COLOR_VIOLET:
//             return COLOR_YELLOW;
//         default:
//             throw new Exception('Unknown color: '+color);
//     }
// }

// console.log(getComplement(COLOR_ORANGE));


/*
const obj = {
    name: 'diako',
    age: 33,
    salary: 800
}

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertyDescriptor(obj));
*/

// const obj = {
//     [Symbol('my_key')]: 1,
//     enum: 2,
//     nonEnum: 3
// };
// Object.defineProperty(obj,'nonEnum', { enumerable: false });

// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj));
// console.log(Object.getOwnPropertyNames(obj)); // enum nonEnum
// console.log(Object.getOwnPropertySymbols(obj)); // Symbol(my_key)
// console.log(Reflect.ownKeys(obj)); // enum nonEnum Symbol(my_key)
// console.log(Object.keys(obj)); // enum



// const sym = Symbol();
// console.log('A symbol: '+String(sym)); // OK
// console.log(`A symbol: ${String(sym)}`); // OK

















































