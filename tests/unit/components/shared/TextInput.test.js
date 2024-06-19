import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import TextInput from '@/components/shared/TextInput.vue'

describe('TextInput', async () => {
  it('detects user entered character', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: ''
      }
    })

    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'abc')
    const messages = emitted()['update:modelValue']
    expect(messages).toEqual([['a'], ['ab'], ['abc']])
  })
})
