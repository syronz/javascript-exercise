

const str = 'math = 15'
let mArr = str.match(/\w+/g)
console.log('mArr1 :: ', mArr)

mArr = str.match(/\d+/g)
console.log('mArr2 :: ', mArr)


let r =  new RegExp('math = (15)')
mArr = str.match(r)
console.log('mArr3 :: ', mArr)


r =  new RegExp(/\w+/,'g')
mArr = str.match(r)
console.log('mArr4 :: ', mArr)

r =  new RegExp('\\w+','g')
mArr = str.match(r)
console.log('mArr5 :: ', mArr)















