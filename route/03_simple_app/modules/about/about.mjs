import {Loader} from '../../utils/loader.js'

export default class About {
  constructor() {
    this.loader = new Loader
    this.data = {
      age: 88
    }
  }

  getContent = async () => {
    let content = await this.loader.getData("about")

    return content
  }

  sayHello = _ => {
    console.log("hello from about.mjs")
  }

  init = async (element) => {
    if (element !== undefined) {
      this.element = element
    }
    await this.render()

    const btns = Array.from(document.querySelectorAll('.about [onAction]'))
    console.log(btns)
    btns.forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault()
      const f = `this.${e.target.getAttribute('onAction')}`
      eval(f)
    }, false ))

  }

  render = async () => {
    let tmp = await this.getContent()
    // const users = await this.getUsers()

    var template = Handlebars.compile(tmp)
    tmp = template({ data: this.data})
    this.element.innerHTML = `<b>${tmp}</b>`

  }

  getUsers = async _ => {
    console.log("pressed")
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
    this.data.users = users
    this.init()
    return users
  }
  
}

/*
export function sayHello() {
  console.log("hello mosleh")
}

const helloBtn = document.querySelector('[onclick]')
console.log(helloBtn)
window.addEventListener('click', _ => {
  sayHello()
})

*/
