const url = '/users/:id/lessons/:lessonName/semester/:semesterID'

const path = '/users/15/lessons/math/semester/2?select=id,name&zone=33'
// let regexPath = this.routes[i].path.replace(/([:*])(\w+)/g, function (full, colon, name) {

const params = []
const preparedReg = url.replace(/:(\w+)/g, (_, paramName) => {
  console.log(paramName)

  params.push(paramName)

  return '(\\w+)'

})

console.log('path 1', url)
console.log('preparedReg', preparedReg)
console.log('params', params)

const regPattern = new RegExp(preparedReg)
let mArr = path.match(regPattern)
console.log('mArr: ', mArr)
