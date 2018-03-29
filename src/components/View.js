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
    this.cookieWave = document.getElementById('cookieWave')
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
      var items = document.createElement('div')
      items.className = 'shop__items'
      this.shop.appendChild(this.createCategoryElement(category.name))
      category.items.map(item => {
        items.appendChild(this.createItemElement(item))
      })
      this.shop.appendChild(items)
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
    element.id = item.id
    element.className = 'item'
    element.style.background = `url("images/items/${item.id}.png") center 100% / 100%`
    this.buyButtons.push(element)
    var description = this.createItemDescription({
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      owned: item.owned
    })
    element.appendChild(description)
    return element
  }

  createItemDescription ({id, name, price, description, owned}) {
    var element = document.createElement('div')
    element.className = 'itemDescription'
    var elementTitle = document.createElement('div')
    elementTitle.className = 'itemDescription__title'
    elementTitle.innerText = name
    element.appendChild(elementTitle)
    var elementPrice = document.createElement('div')
    elementPrice.className = 'itemDescription__price'
    elementPrice.innerText = 'Price: ' + price + ' cookies ' + ' (Owned: ' + owned + ')'
    element.appendChild(elementPrice)
    var elementDescription = document.createElement('div')
    elementDescription.className = 'itemDescription__description'
    elementDescription.innerText = description
    element.appendChild(elementDescription)
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

  showCookieWave (height) {
    this.cookieWave.style.bottom = -100 + height + '%'
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
