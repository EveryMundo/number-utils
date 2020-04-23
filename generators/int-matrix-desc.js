const prev = (numbers, counter, i) => {
  if (--counter[i] >= 0) return true

  if (i > 0) {
    counter[i] = numbers[i]

    return prev(numbers, counter, i - 1)
  }

  return false
}

function * intMatrixDesc (args) {
  const numbers = args.map(Number)
  const counter = Array.from(numbers)
  const lastCol = numbers.length - 1

  // do { yield counter } while (next())

  do { yield Array.from(counter) } while (prev(numbers, counter, lastCol))
}

module.exports = intMatrixDesc
