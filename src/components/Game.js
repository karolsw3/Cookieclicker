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
    this.buildings = {}
    this.shop = new Shop()
    this.view = new View()
  }

  /**
   * Initialise the game
   */
  init () {
    this.startInterval()
    this.view.cookie.addEventListener('onclick', this.cookieClick)
  }

  /**
   * Start main game interval
   */
  startInterval () {
    setInterval(() => {
      this.cookies += this.cookiesPerSecond
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
  }
}

module.exports = Game
