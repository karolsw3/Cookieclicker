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
    this.view.showShopItems(this.shop.categories)
    this.view.cookie.addEventListener('click', this.cookieClick.bind(this), false)
  }

  /**
   * Start main game interval
   */
  startInterval () {
    setInterval(() => {
      this.cookies += parseInt(this.cookiesPerSecond)
      this.view.setCookieCounter(this.cookies)
    }, 1000)
  }

  /**
   * Get quantity of cookies produced per second
   */
  get cookiesPerSecond () {
    return this.buildings.map(building => building.cps)
  }

  /**
   * Increase cookie amount by cookiesPerClick
   */
  cookieClick () {
    this.cookies += this.cookiesPerClick
    this.view.setCookieCounter(this.cookies)
  }
}

export default Game
