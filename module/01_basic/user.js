export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export function PrintName(user) {
  console.log(`User's name is ${user.name}`)
}

export function PrintAge(user) {
  console.log(`User is ${user.age} years old`)
}
