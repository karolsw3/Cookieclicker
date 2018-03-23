import Shop from './Shop'

/**
 * Basic game class.
 * @constructor
 */
class Game {
  constructor () {
    this.cookies = 0
    this.cookiesPerClick = 1
    this.cookiesPerSecond = 0
    this.buildings = {}
    this.shop = new Shop()
    this.view = {}
  }

  /**
   * Initialise the game
   */
  init () {

  }

  /**
   * Increase cookie amount by cookiesPerClick
   */
  cookieClick () {
    this.cookies += this.cookiesPerClick
  }
}

module.exports = Game
