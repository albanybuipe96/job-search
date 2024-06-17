// import { describe, it, expect } from 'vitest'
import { isEven, isOdd, multiply, square } from '@/playground'

// const sum = (a, b) => a + b

describe('basic math', () => {
  describe('isEven', () => {
    it('returns true for even numbers', () => {
      expect(isEven(2)).toBe(true)
    })
    it('returns false for even numbers', () => {
      expect(isEven(3)).toBe(false)
    })
  })
  describe('isOdd', () => {
    it('returns true for odd numbers', () => {
      expect(isOdd(3)).toBe(true)
    })
    it('returns false for even numbers', () => {
      expect(isOdd(8)).toBe(false)
    })
  })
  describe('multiply', () => {
    it('returns the product of its arguments', () => {
      expect(multiply(2, 5)).toBe(10)
    })
    it('returns 0 for a zero argument', () => {
      expect(multiply(2, 0)).toBe(0)
    })
  })
  describe('square', () => {
    it('returns the square of a n umber', () => {
      expect(square(2)).toBe(4)
    })
    it('returns 0 for a zero argument', () => {
      expect(square(0)).toBe(0)
    })
  })
})
