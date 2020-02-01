// const r =  new RegExp('/users/([^/]+)/([^/]+)/twitter/([^/]+)(?:/|$)')
const r =  new RegExp('/users/(15)/([^/]+)/twitter/([^/]+)?(name=diako)')


console.log('R:::::' , r)

const url = '/users/15/good/twitter/323?name=diako'

const arrMatches = url.match(r)
console.log('ARR_MATCHES..... ', arrMatches)
