/**
 * Shop class.
 * @constructor
 */
class Shop {
  constructor () {
    this.categories = [{
      name: 'buildings',
      items: [
        {id: 0, name: 'Cursor', price: 15, cps: 1, cpc: 0, description: 'Automatically clicks for you every second (+1cps)'},
        {id: 1, name: 'Grandmother', price: 100, cps: 8, cpc: 0, description: 'Good grandma to bake your cookies (+8cps)'},
        {id: 2, name: 'Bakery', price: 4000, cps: 75, cpc: 0, description: 'Your private cookie bakery! (+75cps)'},
        {id: 3, name: 'Factory', price: 85000, cps: 400, cpc: 0, description: 'It\'s time to rule the world! (+400cps)'},
        {id: 4, name: 'Cookie town', price: 900000, cps: 5000, cpc: 0, description: '¡Viva el presidente! (+5000cps)'}
      ]
    }, {
      name: 'upgrades',
      items: [
        {id: 5, name: 'Cursor upgrade', price: 500, cps: 0, cpc: 4, description: 'Increases cookies per click'}
      ]
    }]
  }

  /**
   * Callback for buying specified item
   *
   * @callback buyItemCallback
   * @param {object} result - Callback result
   *   @param {string} result.feedback - Information about transaction result
   *   @param {object} result.item - Bought item
   *     @param {number} result.item.price - Price of the item
   *     @param {number} result.item.cps - Cookies per second generated by the item
   *   @param {number} result.change - Cookies change
   *   @param {boolean} result.succeeded - Boolean whether transaction succeeded
   */

  /**
   * Buy specified item
   *
   * @param {object} info - Information about transaction
   *   @param {string} info.id - ID of the item wished to buy
   *   @param {number} info.cookies - All cookies owned by user
   * @param {buyItemCallback} callback - Callback with result object
   */
  buy ({id, cookies}, callback) {
    var result = {feedback: '', item: {}, change: cookies, succeeded: false}

    this.categories.map(category => {
      category.items.map(item => {
        if (item.id === parseInt(id)) {
          result.item = item
        }
      })
    })

    if (typeof result.item === 'undefined') {
      result.feedback = "Item with specified ID doesn't exist!"
    } else if (cookies < result.item.price) {
      result.feedback = "You don't have enough money to buy this item!"
    } else {
      result.feedback = 'Item has been bought successfully'
      result.change -= result.item.price
      result.succeeded = true
    }
    callback(result)
  }
}

export default Shop
