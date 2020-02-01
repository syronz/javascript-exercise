

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

const str2 = 'math = 15, PE = 18'
r =  new RegExp('(\\d+)','g')
mArr = str2.match(r)
console.log('mArr6 :: ', mArr)


const str7 = '/users/15/marks/math?name=diako&age=33'
r = new RegExp('/users/(\\w+)/marks/(\\w+)')
mArr = str7.match(r)
console.log('mArr7 :: ', mArr)

r = new RegExp('/users/([^/]+)/marks/([^/]+)')
mArr = str7.match(r)
console.log('mArr8 :: ', mArr)





// const r =  new RegExp('/users/(15)/([^/]+)/twitter/([^/]+)?(name=diako)')














