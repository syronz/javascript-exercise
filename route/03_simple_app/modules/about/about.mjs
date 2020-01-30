import {Loader} from '../../utils/loader.js'

export default class About {
  constructor() {
    this.loader = new Loader
  }

  message = async () => {
    const content = await this.loader.getData("about")
    return content
  }
}
