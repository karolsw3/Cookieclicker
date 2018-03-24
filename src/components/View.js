/**
 * View class
 * @constructor
 */
class View {
  constructor () {
    this.cookie = document.getElementById('cookie')
    this.shop = document.getElementById('shop')
    this.cookieCounter = document.getElementById('cookieCounter')
  }

  /**
   * Set visual cookie counter to provided value of cookies
   * @param {number} cookies - Quantity of cookies
   */
  setCookieCounter (cookies) {
    this.cookieCounter.innerText = cookies
  }

  /**
   * Generates the view of all items avilable in the shop
   * @param {object} items - All items avilable in the shop
   */
  showShopItems (categories) {
    categories.map(category => {
      category.items.map(item => {
        this.shop.appendChild(this.createItemElement(item))
      })
    })
  }

  createItemElement (item) {
    var element = document.createElement('div')
    element.className = 'item'
    var elementTitle = document.createElement('div')
    elementTitle.className = 'item__title'
    elementTitle.innerText = item.name
    element.appendChild(elementTitle)
    var elementPrice = document.createElement('div')
    elementPrice.className = 'item__price'
    elementPrice.innerText = item.price
    element.appendChild(elementPrice)
    return element
  }
}

export default View
