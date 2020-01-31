'use strict'

class father {
  static chilcNum = 1

  constructor(name) {
    this.me = name
  }

  introduce() {
    console.log(this.me)
  }

  childNumber() {
    return this.constructor.chilcNum++
  }
}

// const dad = new father
// dad.introduce()

class child extends father {

  constructor(name) {
    super('ahmad')
    this.num = super.childNumber()
    this.name = name
    //this.num = this.childNumber()
  }

  introduce() {
    console.log(this.me, this.name, this.num)
  }


}

const boy = new child("karim")
boy.introduce()
console.log(boy)

const girl = new child("kianoosh")
girl.introduce()
console.log(girl)




