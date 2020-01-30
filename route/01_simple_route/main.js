import {Router} from './router.js'

const router = new Router()
const baseHref = 'http://localhost:3000'



const aboutHandler = () => {
  const main = document.getElementById('main')
  main.innerHTML = 'about works';
  console.log('about works');
}

const contactHandler = () => {
  const main = document.getElementById('main')
  main.innerHTML = 'contact works';
  console.log('contact works');
}

const loginHandler = () => {
  const main = document.getElementById('main')

  const lazy = async (main) => {
    try {

    const module = await import("./login/login.mjs");
    const lazyLogin = new module.default;
    const data = await lazyLogin.message()
    main.innerHTML = `<b>${data}</b>`
    } catch(e) {
      console.warn('error in loading lazy content', e)
    }
  }

  lazy(main)
}


router.root = baseHref
router.add({name:'home', path:'/', handler: () => console.log('handler to home')})
router.add({name:'about', path:'/about', handler: aboutHandler})
router.add({name:'contact', path:'/contact', handler: contactHandler})
router.add({name:'user', path:'/user/:id/:action', handler: (params) => console.log('handler to user')})
router.add({name:'login', path:'/login', handler: loginHandler})

if (window.location.pathname != '/') {
  router.navigate(window.location.pathname)
}

window.addEventListener('popstate', () => {
  router.navigate(window.location.pathname, true)
})

const activeRoutes = Array.from(document.querySelectorAll('[route]'))
activeRoutes.forEach((route) => route.addEventListener('click', (e) => {
  e.preventDefault()
  router.navigate(e.target.getAttribute('route'))
}, false))

