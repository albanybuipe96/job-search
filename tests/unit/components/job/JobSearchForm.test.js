import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import JobSearchForm from '@/components/job/JobSearchForm.vue'
import { AppRoutes } from '@/router'

describe('JobSearchForm', () => {
  describe('when user submits form', () => {
    it("directs user to job results page with user's search params", async () => {
      const push = vi.fn()
      const $router = { push }
      render(JobSearchForm, {
        global: {
          mocks: { $router },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      const role = screen.getByRole('textbox', { name: /role/i })
      await userEvent.type(role, 'Software Engineer')

      const location = screen.getByRole('textbox', { name: /where?/i })
      await userEvent.type(location, 'San Francisco')

      const submitBtn = screen.getByRole('button', { name: /search/i })
      await userEvent.click(submitBtn)

      expect(push).toHaveBeenCalledWith({
        name: AppRoutes.JobResults,
        query: {
          role: 'Software Engineer',
          location: 'San Francisco'
        }
      })
    })
  })
})
