import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MainVue from '@/components/MainNav.vue'
import { expect } from 'vitest'
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays compnay name', () => {
    render(MainVue)
    const companyName = screen.getByText('Nexus Careers')
    expect(companyName).toBeInTheDocument()
  })
  it('displays menu items for navigation', () => {
    render(MainVue)
    const navMenu = screen.getAllByRole('listitem')
    const navItems = navMenu.map((item) => item.textContent)
    expect(navItems).toEqual([
      'Teams',
      'Locations',
      'Life at Nexus Careers',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
  describe('when user logs in', () => {
    it('displays profile image', async () => {
      render(MainNav)
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const signInBtn = screen.getByRole('button', { name: /Sign in/i })
      expect(signInBtn).toBeInTheDocument()

      await userEvent.click(signInBtn)

      profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
  describe('when user logs out', () => {
    it('displays sign in button', async () => {
      render(MainNav)

      let signInBtn = screen.getByRole('button', { name: /Sign in/i })
      expect(signInBtn).toBeInTheDocument()

      await userEvent.click(signInBtn)

      const profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()

      await userEvent.click(profileImage)

      expect(profileImage).not.toBeInTheDocument()

      signInBtn = screen.getByRole('button', { name: /Sign in/i })
      expect(signInBtn).toBeInTheDocument()
    })
  })
})
