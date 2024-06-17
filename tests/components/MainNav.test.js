import { render, screen } from '@testing-library/vue'
import MainVue from '@/components/MainNav.vue'
import { expect } from 'vitest'

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
})
