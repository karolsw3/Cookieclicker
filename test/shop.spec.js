import chai from 'chai'
import Shop from '../src/components/Shop'

chai.should()

describe('Shop', () => {
  let shop
  describe('Buy specified item', () => {
    beforeEach(() => {
      shop = new Shop()
    })

    it('buys affordable item', () => {
      shop.buy({
        type: 'building',
        name: 'grandmother',
        cookies: 100
      }, (result) => {
        result.succeeded.should.equal(true)
      })
    })

    it("can't buy unaffordable item", () => {
      shop.buy({
        type: 'building',
        name: 'grandmother',
        cookies: 99
      }, (result) => {
        result.succeeded.should.equal(false)
      })
    })

    it('returns proper change', () => {
      shop.buy({
        type: 'building',
        name: 'grandmother',
        cookies: 150
      }, (result) => {
        result.change.should.equal(50)
      })
    })
  })
})
