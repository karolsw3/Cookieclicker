import chai from 'chai'
import Game from '../src/components/Game'

chai.should()

describe('Game', () => {
  let game
  describe('Increase cookie amount by cookiesPerClick', () => {
    beforeEach(() => {
      game = new Game()
    })
    
    it('adds one cookie', () => {
      game.cookieClick()
      game.cookies.should.equal(1)
    })

    it('adds twelve cookies', () => {
      game.cookiesPerClick = 12
      game.cookieClick()
      game.cookies.should.equal(12)
    })
  })

})
