export class Loader {
  generatePath = (str) => {
    const css = `./modules/${str}/${str}.css`
    const html = `./modules/${str}/${str}.html`
    return [css, html]
  }

  // getData is used for loading css and html and return back combine of them as union content
  getData = async (part) => {
    const [css, html] = this.generatePath(part)
    const style = await fetch(css).then(stream => stream.text())
    let data = await fetch(html).then(stream => stream.text())
    data = `<style>\n${style}</style>\n${data}`
    return data
  }
}
