import Shop from './Shop'
import View from './View'

/**
 * Basic game class.
 * @constructor
 */
class Game {
  constructor () {
    this.cookies = 0
    this.cookiesPerClick = 1
    this.buildings = [{cps: 0}]
    this.shop = new Shop()
    this.view = new View()
  }

  /**
   * Initialise the game
   */
  init () {
    this.startInterval()
    this.reloadShopView()
    this.view.cookie.addEventListener('click', this.cookieClick.bind(this), false)
  }

  reloadShopView () {
    this.view.showShopItems(this.shop.categories)
    this.view.buyButtons.map(button => {
      button.addEventListener('click', this.buyButtonClick.bind(this), false)
    })
  }

  /**
   * Start main game interval
   */
  startInterval () {
    setInterval(() => {
      this.cookies += parseInt(this.cookiesPerSecond) / 10
      this.view.setCookieCounter(Math.floor(this.cookies))
    }, 100)
  }

  /**
   * Get quantity of cookies produced per second
   */
  get cookiesPerSecond () {
    return this.buildings.map(building => building.cps).reduce((a, b) => a + b, 0)
  }

  /**
   * Increase cookie amount by cookiesPerClick
   */
  cookieClick () {
    this.cookies += this.cookiesPerClick
    this.view.setCookieCounter(Math.floor(this.cookies))
  }

  /**
   * Fired when a buy button is clicked
   */
  buyButtonClick (event) {
    this.shop.buy({
      id: event.target.id,
      cookies: this.cookies
    }, (result) => {
      if (result.succeeded) {
        result.item.price = Math.round(result.item.price * 1.4)
        this.reloadShopView()
        this.buildings.push(result.item)
        this.cookies = Math.round(result.change)
        this.view.setCookieCounter(this.cookies)
        this.view.setCpsCounter(this.cookiesPerSecond)
      }
    })
  }
}

export default Game
