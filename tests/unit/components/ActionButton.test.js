import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/widgets/ActionButton.vue'
// import userEvent from '@testing-library/user-event'

describe('ActionButton', () => {
  it('renders a primary button with text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
    expect(button).toHaveClass('primary')
  })
  it('renders a secondary button with text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'secondary'
      }
    })
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
    expect(button).toHaveClass('secondary')
  })
})
