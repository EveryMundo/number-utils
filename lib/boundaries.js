module.exports = function boundaries (n, min, max, defaultNum) {
  if (min >= max) throw new Error(`min[${min}] >= max[${max}]`)

  if (min > defaultNum || defaultNum > max) throw new Error(`defaultNum [${defaultNum}] is not between min[${min}] >= max[${max}]`)

  return ((n == null || Number.isNaN(+n)) && defaultNum) || (n < min && min) || (n > max && max) || +n
}
