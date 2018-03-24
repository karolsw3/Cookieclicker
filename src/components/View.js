/**
 * View class
 * @constructor
 */
class View {
  constructor () {
    this.cookie = document.getElementById('cookie')
    this.cookieCounter = document.getElementById('cookieCounter')
  }

  /**
   * Set visual cookie counter to provided value of cookies
   * @param {number} cookies - Quantity of cookies
   */
  setCookieCounter (cookies) {
    this.cookieCounter.innerText = cookies
  }
}

export default View
