'use strict'

const route = [
  { path: 'home', action: _ => console.log('this is home') },
  { path: 'login', action: _ => console.log('this is login') },
  { path: 'about', action: _ => console.log('this is about'), children: [
    {path: 'sub', action: _ => console.log('this is sub') },
  
    ],
  },
  { path: 'contact', action: _ => console.log('this is contact') },
]

window.addEventListener('popstate', () => {
  // router.navigate(window.location.pathname, true)
  cosnole.log("INSIDE POPSTATE.................")
})

const activeRoutes = Array.from(document.querySelectorAll('[route]'))
activeRoutes.forEach((route) => route.addEventListener('click', (e) => {
  e.preventDefault()
  const router = new Router()
  router.navigate(e.target.getAttribute('route'))
  // router.navigate(e.target.getAttribute('route'))
  console.log(e.target.getAttribute('route'))
}, false))


class Router {

  navigate(url) {
    console.log('navigate: go to ', url)

  }

}
