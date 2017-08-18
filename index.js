'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 3000, host: 'localhost' })

let cartao = {
  dueDate: '',
  limit: '',
  nr: '',
  cvv: '',
  expiration: '',
}

// You'd rather use the card that's farther in the month to pay because you'll have more time to get rid of its bill.
// If both cards expire on the same day, you would prefer to use the one that has the smallest limit to continue having the card with the highest limit.

function pickCard(value, cards) {

  let curDate = new Date(),
  let selectedCards = [],

  if(cards.length === 0) {
    throw new Error('Cards array is empty')
  }

  cards = cards.sort((a,b) => {
    if(curDate.getDate() - b.dueDate) - (curDate.getDate() - a.dueDate === 0) {
      return  (a.limit - b.limit)
    }
    return (curDate.getDate() - b.dueDate) - (curDate.getDate() - a.dueDate)
  }).shift()

}

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!')
  },
})

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!')
  },
})

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
