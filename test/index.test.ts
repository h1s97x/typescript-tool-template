import { greet, add, isEmpty } from '../src/utils'

describe('utils', () => {
  describe('greet', () => {
    it('should greet with name', () => {
      expect(greet('World')).toBe('Hello, World!')
    })
  })

  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3)
    })

    it('should handle negative numbers', () => {
      expect(add(-1, -1)).toBe(-2)
    })
  })

  describe('isEmpty', () => {
    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('should return true for whitespace only', () => {
      expect(isEmpty('   ')).toBe(true)
    })

    it('should return false for non-empty string', () => {
      expect(isEmpty('hello')).toBe(false)
    })
  })
})
