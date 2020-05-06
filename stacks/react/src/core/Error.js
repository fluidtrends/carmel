export default class CarmelError extends Error {
  constructor (message) {
    super()

    this.message = `${message}`
    this.stack = (new Error()).stack
    this.name = 'Carmel'
  }
}
