import { nextElementInList } from '@/utils/next-element-in-list'

describe('nextElementInList', () => {
  describe('get next element from any location beside last', () => {
    it('locate current next element in list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'C'
      const result = nextElementInList(list, value)
      expect(result).toBe('D')
    })
  })

  describe('get next element from last location', () => {
    it('locate current next element in list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'
      const result = nextElementInList(list, value)
      expect(result).toBe('A')
    })
  })
})
