const path = '/users/15/lessons/math/semester/2?select=id,name&zone=33'

const r = new RegExp('\\?(\\S+$)')

const queryStr = path.match(r)[1]

console.log('queryStr 1: ', queryStr)


queryParams = new Map()
queryStr.split('&').map(x => {
  const parts = x.split('=')
  queryParams.set(parts[0], parts[1])
})
console.log(queryParams)



