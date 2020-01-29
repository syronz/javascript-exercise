/********** https://exploringjs.com/es6/ch_destructuring.html **/

'use strict'

// const obj = { first: 'Jane', last: 'Doe' };
// const {first: f, last: l} = obj;
// console.log(f, l);

// const {first, last} = obj;
// console.log(first, last);


/************ object refernce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object ****/

// const arr = {a:1, b:2};
// const arr2 = {b:3, c:4};

// const arrResult = Object.assign(arr, arr2);
// console.log(arr, arr2, arrResult);



// defineProperties()

// const obj = {};

// Object.defineProperties(obj, {
//     p1: {
//         value: 100,
//         writable: true,
//     },
//     p2: {},
//     p3: {
//         value: 90,
//     },
// });

// console.log(obj);
// obj.p1 = 99;
// console.log(obj);



// const obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj));
// const arr = [2,3,5,3];
// console.log(Object.entries(arr));



// const obj = {
//   prop: 42
// };
// Object.freeze(obj);
// obj.prop = 33;
// console.log(obj.prop);



// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42]
// ]);
// console.log(entries);
// const obj = Object.fromEntries(entries);
// console.log(obj);


// const entries2 = [
//   ['foo', 'bar'],
//   ['baz', 42]
// ];
// console.log(entries2);
// const obj2 = Object.fromEntries(entries2);
// console.log(obj2);



// const obj = { foo: 123 };
// Object.defineProperties(obj, {
//     p1: {
//         value: 100,
//         writable: true,
//     },
//     p2: {},
//     p3: {
//         value: 90,
//     },
// });
// delete(obj.foo);
// console.log(Object.getOwnPropertyDescriptors(obj));

// const {writable, configurable} =
//     Object.getOwnPropertyDescriptor(obj, 'foo');
// console.log(writable, configurable);


const {length : len} = 'abc'; // len = 3
const {toString: s} = 123; // s = Number.prototype.toString
console.log(len, s);












