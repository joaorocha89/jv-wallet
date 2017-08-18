const { expect, it } = exports.lab = require('lab').script()
const cards = require('../cards.js')

let curDate = new Date()

let card1 = {
  dueDate: curDate.getDate() + 10,
  limit: 1000,
  name: 'card1',
}

let card2 = {
  dueDate: curDate.getDate() + 20,
  limit: 1000,
  name: 'card2',
}

let testCards = [card1, card2]

it('reordena array de cartoes para escolher os cartoes', (done) => {
  let sortedCards = cards.pickCards(500, testCards)
  expect(sortedCards[0].name).to.equal('card1')
  done()
})
