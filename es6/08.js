/******* https://exploringjs.com/es6/ch_template-literals.html */

// var parts = '/2015/10/Page.html'.match(XRegExp.rx`
//     ^ # match at start of string only
//     / (?<year> [^/]+ ) # capture top dir name as year
//     / (?<month> [^/]+ ) # capture subdir name as month
//     / (?<title> [^/]+ ) # capture base name as title
//     \.html? $ # .htm or .html file ext at end of path
// `);

// console.log(parts.year); // 2015


// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];

// const tmpl = addrs => `
//     <table>
//     ${addrs.map(addr => `
//         <tr><td>${addr.first}</td></tr>
//         <tr><td>${addr.last}</td></tr>
//     `).join('')}
//     </table>
// `;
// console.log(tmpl(data));


// function describe(tmplObj, ...substs) {
//     return {
//         Cooked: merge(tmplObj, substs),
//         Raw: merge(tmplObj.raw, substs),
//     };
// }
// function merge(tmplStrs, substs) {
//     // There is always at least one element in tmplStrs
//     let result = tmplStrs[0];
//     substs.forEach((subst, i) => {
//         result += String(subst);
//         result += tmplStrs[i+1];
//     });
//     return result;
// }

// console.log(describe`${3+3}`);
// console.log(describe`\${3+3}`);


