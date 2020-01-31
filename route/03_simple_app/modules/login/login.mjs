import {Loader} from '../../utils/loader.js'

export default class Login {
  constructor() {
    this.loader = new Loader
  }

  getContent = async () => {
    let content = await this.loader.getData("login")
    return content
  }

  sayHello() {
    console.log('hello mahmoud')
  }

  alert() {
    alert("this is an alert")
  }

  submit() {
    console.log('hello form')
  }

  init = async (element) => {
    const data = await this.getContent()
    element.innerHTML = `<b>${data}</b>`

    // const btnLogin = document.getElementById('btnLogin')
    // console.log(".......>>>", btnLogin)
    // btnLogin.addEventListener('click', _ => {
    //   this.sayHello()
    // })
    //

    const btns = Array.from(document.querySelectorAll('.login [pOnclick]'))
    btns.forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault()
      const f = `this.${e.target.getAttribute('pOnclick')}`
      eval(f)
    }, false ))

    console.log(btns)
// const activeRoutes = Array.from(document.querySelectorAll('[route]'))
// activeRoutes.forEach((route) => route.addEventListener('click', (e) => {
//   e.preventDefault()
//   router.navigate(e.target.getAttribute('route'))
// }, false))
  }

}

// export function sayHello() {
//   console.log("hello diako")
// }

// const btnLogin = document.querySelector('#btnLogin')
// helloBtn.addEventListener('click', _ => {
//   // sayHello()
//       console.log("it is clicked!!")
// })
/*
*/



/*
export default class Login{
  async message() {
  
    // return await fetch("./login/login.html")
    //   .then(stream => stream.text())
    //   .then(text => {
    //     console.log('content of file', text);
    //   })
    // return "lazy login";

    try {

        

    const style = await fetch("./modules/login/login.css").then(stream => stream.text())
    let data = await fetch("./modules/login/login.html").then(stream => stream.text())
      
      // for (let i = 1; i < 500000; i++ ) {
      //   data += "diako, mosleh, amjad, barez ...<br>"
      // }
    data = `<style>\n${style}</style>\n${data}`
    // console.log('data in login', data)
    return data

    } catch(e) {
      console.warn(e);
    }

  }
}

*/
