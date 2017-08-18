function pickCards (value, cards) {
  let curDate = new Date().getDate()
  let selectedCards = []

  if (cards.length === 0) {
    throw new Error('Cards array is empty')
  }

  selectedCards = cards.sort((a, b) => {
    let bDate = curDate > b.dueDate ? b.dueDate : b.dueDate - curDate
    let aDate = curDate > a.dueDate ? a.dueDate : a.dueDate - curDate

    let val = bDate > aDate ? 1 : -1

    if (val === 0) {
      return a.limit - b.limit
    }

    return val
  })

  return selectedCards
}

module.exports = {
  pickCards: pickCards,
}
