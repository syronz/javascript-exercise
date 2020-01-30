export default class Login{
  async message() {
    // return await fetch("./login/login.html")
    //   .then(stream => stream.text())
    //   .then(text => {
    //     console.log('content of file', text);
    //   })
    // return "lazy login";

    const data = await fetch("./login/login.html").then(stream => stream.text())
    return data

  }
}

