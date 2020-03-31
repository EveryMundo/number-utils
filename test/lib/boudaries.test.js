const { expect } = require('chai')

describe('lib/boudaries', () => {
  const boundaries = require('../../lib/boundaries')

  const min = 10
  const max = 100
  const def = 50

  context('when an invalid input such as', () => {
    context('NaN is passed', () => {
      it('should return the default value', () => {
        const res = boundaries(NaN, min, max, def)

        expect(res).to.equal(def)
      })
    })

    context('null is passed', () => {
      it('should return the default value', () => {
        const res = boundaries(null, min, max, def)

        expect(res).to.equal(def)
      })
    })

    context('undefined is passed', () => {
      it('should return the default value', () => {
        const res = boundaries(undefined, min, max, def)

        expect(res).to.equal(def)
      })
    })

    context('Invalid String is passed', () => {
      it('should return the default value', () => {
        const res = boundaries('something', min, max, def)

        expect(res).to.equal(def)
      })
    })
  })

  context('when a valid number is passed', () => {
    context('but it is lower than min', () => {
      it('should return min', () => {
        const res = boundaries(min - 10, min, max, def)

        expect(res).to.equal(min)
      })
    })

    context('but it is greater than max', () => {
      it('should return max', () => {
        const res = boundaries(max + 10, min, max, def)

        expect(res).to.equal(max)
      })
    })

    context('and it is within the boundaries', () => {
      it('should return the input', () => {
        const input = max - 10
        const res = boundaries(input, min, max, def)

        expect(res).to.equal(input)
      })
    })
  })

  context('when min > max', () => {
    it('should throw an error', () => {
      const caller = () => boundaries(null, max, min, def)

      expect(caller).to.throw(Error, `min[${max}] >= max[${min}]`)
    })
  })

  context('default number is not between min > max', () => {
    context('default < min', () => {
      it('should throw an error', () => {
        const caller = () => boundaries(null, min, max, min - 10)

        expect(caller).to.throw(Error, `defaultNum [${min - 10}] is not between min[${min}] >= max[${max}]`)
      })
    })

    context('default > max', () => {
      it('should throw an error', () => {
        const caller = () => boundaries(null, min, max, max + 10)

        expect(caller).to.throw(Error, `defaultNum [${max + 10}] is not between min[${min}] >= max[${max}]`)
      })
    })
  })
})
