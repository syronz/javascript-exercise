console.log("this is sample")


// str = '/about/summary?name=diakopath'
// str = '/about'
// str2 = '/about'
str = '/users/:id/:action/twitter/:tID'
str2 = '/users/15/good/twitter/323?name=diako'

let paramNames = []
let regexPath = str.replace(/([:*])(\w+)/g, function (full, colon, name) {
  
  console.log('#############', full, colon, name)
  paramNames.push(name)
  return '([^\/]+)';
}) + '(?:\/|$)';

console.log('regexPath ............', regexPath, paramNames)

let routeMatch = str2.match(new RegExp(regexPath))

console.log('routeMatch ***********', routeMatch, paramNames)

