/**
 * Class responsible for modyfying the game visual content
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

  /**
   * Set visual cookies per second counter to provided value of cps
   * @param {number} cps - Quantity of cookies produced per second
   */
  setCpsCounter (cps) {
    this.cpsCounter.innerText = 'Cookies per second: ' + cps
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
    elementPrice.innerText = 'Price: ' + item.price + ' cookies'
    element.appendChild(elementPrice)
    var elementDescription = document.createElement('div')
    elementDescription.className = 'item__description'
    elementDescription.innerText = item.description
    element.appendChild(elementDescription)
    element.appendChild(this.createBuyButton(item.id))
    return element
  }

  /**
   * Create buy button DOM element, attach its ID to item ID and return it
   * @param {number} itemId - ID of item that can be bought
   */
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
