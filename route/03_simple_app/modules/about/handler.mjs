export default function aboutHandler() {

  const main = document.getElementById('main')

  const lazy = async (main) => {
    try {

    const module = await import("./about.mjs");
    const lazyLogin = new module.default;
    const data = await lazyLogin.message()
    main.innerHTML = `<b>${data}</b>`
    } catch(e) {
      console.error('error in loading lazy content', e)
    }
  }

  lazy(main)


}

