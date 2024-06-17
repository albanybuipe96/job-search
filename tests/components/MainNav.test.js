import { render, screen } from '@testing-library/vue'
import MainVue from '@/components/MainNav.vue'
import { expect } from 'vitest'

describe('MainNav', () => {
  it('displays compnay name', () => {
    render(MainVue)
    const companyName = screen.getByText('Nexus Careers')
    expect(companyName).toBeInTheDocument()
  })
})
