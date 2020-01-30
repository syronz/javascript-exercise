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

