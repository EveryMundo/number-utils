/**
 * @description Returns the number within the boundaries
 * @param {number} n - intended number
 * @param {number} min - min number
 * @param {number} max - max number
 * @param {number} defaultNum - default number if n is not a number
 * @returns {number} - number within the boundaries
 */
module.exports = function boundaries (n, min, max, defaultNum) {
  for (const arg of [min, max, defaultNum]) {
    if (arg == null || Number.isNaN(+arg)) throw new Error(`min[${min}] max[${max}] defaultNum[${defaultNum}] is not a number`)
  }

  if (min >= max) throw new Error(`min[${min}] >= max[${max}]`)

  if (min > defaultNum || defaultNum > max) throw new Error(`defaultNum [${defaultNum}] is not between min[${min}] >= max[${max}]`)

  return ((n == null || Number.isNaN(+n)) && defaultNum) || (n < min && min) || (n > max && max) || +n
}
