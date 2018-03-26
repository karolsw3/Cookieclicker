/**
 * Class responsible for modyfying the game visual content
 * @constructor
 */
class View {
  constructor () {
    this.cookie = document.getElementById('cookie')
    this.cookie.draggable = false
    this.shop = document.getElementById('shop')
    this.cookieCounter = document.getElementById('cookieCounter')
    this.alert = document.getElementById('alert')
    this.cpsCounter = document.getElementById('cpsCounter')
    this.gameBox = document.getElementById('gameBox')
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
      this.shop.appendChild(this.createCategoryElement(category.name))
      category.items.map(item => {
        this.shop.appendChild(this.createItemElement(item))
      })
    })
  }

  /**
   * Generate visual alert and show it
   * @param {string} message - Message to be shown
   * @param {number} duration - How long the alert will be displayed (in ms)
   */
  showAlert (message, duration) {
    this.alert.innerText = message
    this.alert.style.opacity = 1
    setTimeout(() => {
      this.alert.style.opacity = 0
    }, duration)
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
    elementPrice.innerText = 'Price: ' + item.price + ' cookies ' + ' (Owned: ' + item.owned + ')'
    element.appendChild(elementPrice)
    var elementDescription = document.createElement('div')
    elementDescription.className = 'item__description'
    elementDescription.innerText = item.description
    element.appendChild(elementDescription)
    element.appendChild(this.createBuyButton(item.id))
    return element
  }

  /**
   * Create category DOM label and return it
   * @param {string} name - Category name
   */
  createCategoryElement (name) {
    var element = document.createElement('div')
    element.className = 'shop__category'
    element.innerText = name
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

  /**
   * Create cookie fall background animation
   * @param {number} quantity - Amount of cookies to be generated
   */
  makeCookieRain (quantity) {
    quantity = quantity > 30 ? 30 : quantity
    for (let i = 0; i < quantity; i++) {
      let cookieElement = document.createElement('div')
      cookieElement.className = 'fallingCookie'
      cookieElement.style.left = Math.random() * window.innerWidth + 'px'
      setTimeout(() => {
        this.gameBox.appendChild(cookieElement)
        setTimeout(() => {
          this.gameBox.removeChild(cookieElement)
        }, 2000)
      }, Math.random() * 1000)
    }
  }

  /**
   * Show specified text near the cursor that fades away after 800ms
   * @param {object} event - Document click event
   * @param {string} text - Text to be shown
   */
  showCursorText (event, text) {
    var cursorText = document.createElement('div')
    cursorText.className = 'cursorText'
    cursorText.style.left = event.clientX - 15 + 'px'
    cursorText.style.top = event.clientY - 30 + 'px'
    cursorText.innerHTML = text
    document.body.appendChild(cursorText)
    setTimeout(() => {
      document.body.removeChild(cursorText)
    }, 800)
  }
}

export default View
