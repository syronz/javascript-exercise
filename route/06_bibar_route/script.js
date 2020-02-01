'use strict'
import {Router} from './router.js'

const route = [
  { path: 'home', action: _ => console.log('this is home') },
  { path: 'login', action: _ => console.log('this is login') },
  { path: 'about', action: _ => console.log('this is about'), children: [
    {path: 'sub', action: _ => console.log('this is sub') },
    {path: 'location', action: _ => console.log('this is sub') },
    {path: 'history/:year', action: _ => console.log('this is history'), children: [
      {path: 'sort', action: _ => console.log('this is sort') },
      ],
    },
  
    ],
  },
  { path: 'users/:id', action: _ => console.log('this is users'), children: [
    { path: 'manage', action: _ => console.log('this is user manage') },
    { path: 'view', action: _ => console.log('this is user view') },
    ],
  },
  { path: 'contact', action: _ => console.log('this is contact') },
  { path: 'contact', action: _ => console.log('this is contact') },
]

window.addEventListener('popstate', () => {
  // router.navigate(window.location.pathname, true)
  cosnole.log("INSIDE POPSTATE.................")
})


const activeRoutes = Array.from(document.querySelectorAll('[route]'))
activeRoutes.forEach((route) => route.addEventListener('click', (e) => {
  e.preventDefault()
  router.navigate(e.target.getAttribute('route'))
  // router.navigate(e.target.getAttribute('route'))
  console.log(e.target.getAttribute('route'))
}, false))



const router = new Router(route)
console.log(router)

