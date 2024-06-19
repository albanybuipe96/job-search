import { render, screen } from '@testing-library/vue'
import { nextTick } from 'vue'

import HeadLine from '@/components/job/HeadLine.vue'
import { afterEach, beforeEach, expect, vi } from 'vitest'

describe('HeadLine', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays introductory action verb', () => {
    render(HeadLine)
    const headline = screen.getByRole('heading', { name: /build for everyone/i })
    expect(headline).toBeInTheDocument()
  })

  it('changes action verb at consistent interval', () => {
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)
    render(HeadLine)

    expect(mock).toHaveBeenCalled()
  })

  it('swaps action verb after interval', async () => {
    vi.useFakeTimers()
    render(HeadLine)
    vi.advanceTimersToNextTimer()
    await nextTick()
    const headline = screen.getByRole('heading', { name: /create for everyone/i })
    expect(headline).toBeInTheDocument()
  })

  it('removes interval when component disappears', () => {
    vi.useFakeTimers()
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval', clearInterval)
    const { unmount } = render(HeadLine)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
