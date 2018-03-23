/**
 * Shop class.
 * @constructor
 */
class Shop {
  constructor () {
    this.items = {
      buildings: {
        'grandmother': {price: 100, cps: 8},
        'bakery': {price: 4000, cps: 75},
        'factory': {price: 85000, cps: 400}
      }
    }
  }

  /**
   * Buy specified item
   * @param {string} type - Type of the item to be bought
   * @param {string} name - Name of the item
   * @param {number} cookies - All cookies owned by user
   *
   * @return {string} feedback - Information whether request succeeded
   * @return {object} item - Bought item object
   * @return {string} change - Cookies change
   */
  buy ({type, name, cookies}) {
    var feedback = ''
    var change = cookies
    var item = {}
    if (typeof this.items[type][name] !== 'object') {
      feedback = "Specified item doesn't exists"
    } else if (this.items[type][name].price > cookies) {
      feedback = "You don't have enough money to buy that"
    } else {
      feedback = 'Item has been bought'
      item = this.items[type][name]
    }
    return {
      feedback: feedback,
      item: item,
      change: change
    }
  }
}

module.exports = Shop
