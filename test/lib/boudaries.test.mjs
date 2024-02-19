import { expect } from 'chai'
import boundaries from '../../lib/boundaries.js'

describe('lib/boudaries', () => {
  const min = 10
  const max = 100
  const defaultNum = 50

  describe('when an invalid number is passed for', () => {
    describe('min', () => {
      it('should throw an error', () => {
        const caller = () => boundaries(10, Object, max, defaultNum)

        expect(caller).to.throw(Error, `min[${Object}] max[${max}] defaultNum[${defaultNum}] is not a number`)
      })
    })

    describe('max', () => {
      it('should throw an error', () => {
        const caller = () => boundaries(10, min, Object, defaultNum)

        expect(caller).to.throw(Error, `min[${min}] max[${Object}] defaultNum[${defaultNum}] is not a number`)
      })
    })

    describe('defaultNum', () => {
      it('should throw an error', () => {
        const caller = () => boundaries(10, min, max, Object)

        expect(caller).to.throw(Error, `min[${min}] max[${max}] defaultNum[${Object}] is not a number`)
      })
    })
  })

  describe('when an invalid input such as', () => {
    describe('NaN is passed', () => {
      it('should return the default value', () => {
        const res = boundaries(NaN, min, max, defaultNum)

        expect(res).to.equal(defaultNum)
      })
    })

    describe('null is passed', () => {
      it('should return the default value', () => {
        const res = boundaries(null, min, max, defaultNum)

        expect(res).to.equal(defaultNum)
      })
    })

    describe('undefined is passed', () => {
      it('should return the default value', () => {
        const res = boundaries(undefined, min, max, defaultNum)

        expect(res).to.equal(defaultNum)
      })
    })

    describe('Invalid String is passed', () => {
      it('should return the default value', () => {
        const res = boundaries('something', min, max, defaultNum)

        expect(res).to.equal(defaultNum)
      })
    })
  })

  describe('when a valid number is passed', () => {
    describe('but it is lower than min', () => {
      it('should return min', () => {
        const res = boundaries(min - 10, min, max, defaultNum)

        expect(res).to.equal(min)
      })
    })

    describe('but it is greater than max', () => {
      it('should return max', () => {
        const res = boundaries(max + 10, min, max, defaultNum)

        expect(res).to.equal(max)
      })
    })

    describe('and it is within the boundaries', () => {
      it('should return the input', () => {
        const input = max - 10
        const res = boundaries(input, min, max, defaultNum)

        expect(res).to.equal(input)
      })
    })
  })

  describe('when min > max', () => {
    it('should throw an error', () => {
      const caller = () => boundaries(null, max, min, defaultNum)

      expect(caller).to.throw(Error, `min[${max}] >= max[${min}]`)
    })
  })

  describe('default number is not between min > max', () => {
    describe('default < min', () => {
      it('should throw an error', () => {
        const caller = () => boundaries(null, min, max, min - 10)

        expect(caller).to.throw(Error, `defaultNum [${min - 10}] is not between min[${min}] >= max[${max}]`)
      })
    })

    describe('default > max', () => {
      it('should throw an error', () => {
        const caller = () => boundaries(null, min, max, max + 10)

        expect(caller).to.throw(Error, `defaultNum [${max + 10}] is not between min[${min}] >= max[${max}]`)
      })
    })
  })
})
