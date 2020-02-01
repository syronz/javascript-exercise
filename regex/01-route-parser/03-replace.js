function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  console.log('.............>>>>>>>>>>>>>>>>>>', match, p1, p2, p3, offset, string)
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%

var newString = 'abc#$*%12345'.replace(/([^\W]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%


string = '/users/:id/class/:degree'
// result = string.match(/([:*])(\w+)/g)
// console.log(string, result);
let result = string.replace(/e/g, () => {
  // console.log(arguments)
})
// console.log(result)
// \
//


let s = 'hello 032-2351 my number is 083-1334 and it is unique'
let r = /(\d{3})-(\d{4})/g;

let newStr = s.replace(r, replacor)

console.log('newSTR' , newStr)

function replacor(match, g1, g2, g3, g4) {
  console.log('!!!!!!!!!>>>', arguments)
  return `${g2}-${g1}`

}


