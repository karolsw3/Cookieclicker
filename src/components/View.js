/**
 * View class
 * @constructor
 */
class View {
  constructor () {
    this.cookie = document.getElementById('cookie')
    this.shop = document.getElementById('shop')
    this.cookieCounter = document.getElementById('cookieCounter')
    this.cpsCounter = document.getElementById('cpsCounter')
    this.buyButtons = []
  }

  /**
   * Set visual cookie counter to provided value of cookies
   * @param {number} cookies - Quantity of cookies
   */
  setCookieCounter (cookies) {
    this.cookieCounter.innerText = 'Cookies: ' + cookies
  }

  setCpsCounter (cps) {
    this.cpsCounter.innerText = 'Cookies per second:' + cps
  }

  /**
   * Generate view of all items avilable in the shop
   * @param {object} items - All items avilable in the shop
   */
  showShopItems (categories) {
    this.shop.innerHTML = ''
    categories.map(category => {
      category.items.map(item => {
        this.shop.appendChild(this.createItemElement(item))
      })
    })
  }

  /**
   * Create item DOM element and return it
   * @param {object} item - Item of which element will be created
   */
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
    element.appendChild(this.createBuyButton(item.id))
    return element
  }

  createBuyButton (itemId) {
    var button = document.createElement('button')
    button.className = 'item__button item__button--buy'
    button.id = itemId
    button.innerText = 'Buy'
    this.buyButtons.push(button)
    return button
  }
}

export default View
