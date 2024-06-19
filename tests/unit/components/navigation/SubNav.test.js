import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/navigation/SubNav.vue'
import { describe } from 'vitest'

describe('SubNav', () => {
  describe('when user on jobs page', () => {
    it('displays jobs count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            isOnJobsPage: true
          }
        }
      })
      const jobsCount = screen.getByText('1653')
      expect(jobsCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does not display jobs count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            isOnJobsPage: false
          }
        }
      })
      const jobsCount = screen.queryByText('1653')
      expect(jobsCount).not.toBeInTheDocument()
    })
  })
})
