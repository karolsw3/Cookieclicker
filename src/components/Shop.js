/**
 * Shop class.
 * @constructor
 */
class Shop {
  constructor () {
    this.items = {
      building: {
        'grandmother': {price: 100, cps: 8},
        'bakery': {price: 4000, cps: 75},
        'factory': {price: 85000, cps: 400}
      }
    }
    this.buy = this.buy.bind(this)
  }

  /**
   * Buy specified item
   * @param {string} type - Type of the item to be bought
   * @param {string} name - Name of the item
   * @param {number} cookies - All cookies owned by user
   *
   */
  buy ({type, name, cookies}, callback) {
    var result = {feedback: '', item: {}, change: 0, succeeded: false}
    if (typeof this.items[type][name] !== 'object') {
      result.feedback = "Specified item doesn't exists"
    } else if (this.items[type][name].price > cookies) {
      result.feedback = "You don't have enough money to buy that"
    } else {
      result.feedback = 'Item has been bought'
      result.item = this.items[type][name]
      result.succeeded = true
    }
    callback(result)
  }
}

module.exports = Shop
