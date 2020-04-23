const zro = require('../lib/zero')

const next = (numbers, counter, i) => {
  if (++counter[i] <= numbers[i]) return true

  if (i > 0) {
    counter[i] = 0

    return next(numbers, counter, i - 1)
  }

  return false
}

function * intMatrixAsc (args) {
  const numbers = args.map(Number)
  const counter = Array.from(numbers, zro)
  const lastCol = numbers.length - 1

  do { yield [...counter] } while (next(numbers, counter, lastCol))
}

module.exports = intMatrixAsc
