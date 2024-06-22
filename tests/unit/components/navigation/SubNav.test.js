import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/navigation/SubNav.vue'
import { describe } from 'vitest'

describe('SubNav', () => {
  const renderSubNav = (routeName) => {
    render(SubNav, {
      global: {
        mocks: {
          $route: { name: routeName }
        },
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
  }
  describe('when user is on jobs page', () => {
    it('displays jobs count', () => {
      const routeName = 'JobResults'
      renderSubNav(routeName)
      const jobsCount = screen.getByText('1653')
      expect(jobsCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does not display jobs count', () => {
      const routeName = 'Home'
      renderSubNav(routeName)
      const jobsCount = screen.queryByText('1653')
      expect(jobsCount).not.toBeInTheDocument()
    })
  })
})
