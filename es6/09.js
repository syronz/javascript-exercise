/********** https://exploringjs.com/es6/ch_variables.html *****/
// const arr = [];
// for (var i of [0, 1, 2]) {
//     arr.push(() => i);
// }
// arr.map(x => x());

// console.log(arr);


// const arr2 = [];
// for (const i of [0, 1, 2]) {
//     arr.push(() => i);
// }
// arr.map(x => x()); // [0,1,2]
// console.log(arr2);



// const entries = [
//     ['yes', 'ja'],
//     ['no', 'nein'],
//     ['perhaps', 'vielleicht'],
// ];
// const content = document.getElementById('content');

// entries.map(([source, target]) => {
// //     const [source, target] = x;
// //     console.log(x, source, target);

//      content.insertAdjacentHTML('beforeend',
//         `<div><a id="${source}" href="">${source}</a></div>`);
//     document.getElementById(source).addEventListener(
//         'click', (event) => {
//             event.preventDefault();
//             console.log(target);
//         });

// });

// /*
// for (const [source, target] of entries) { // (A)
//     content.insertAdjacentHTML('beforeend',
//         `<div><a id="${source}" href="">${source}</a></div>`);
//     document.getElementById(source).addEventListener(
//         'click', (event) => {
//             event.preventDefault();
// //             alert(target); // (B)
//             console.log(target);
//         });
// }
// */

















