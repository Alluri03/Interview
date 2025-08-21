import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { vi } from 'vitest'

test('renders list and paginates 5 users per page', async () => {
  render(<App />)
  // wait for first item
  const first = await screen.findByText(/User 1/)
  expect(first).toBeInTheDocument()
  // shows 5 items
  const items = (await screen.findAllByRole('listitem'))
  expect(items.length).toBe(5)
  // go to next
  const next = screen.getByRole('button', {name:/next/i})
  await userEvent.click(next)
  const secondPageFirst = await screen.findByText(/User 6/)
  expect(secondPageFirst).toBeInTheDocument()
})

test('debounced search filters and highlights', async () => {
  vi.useFakeTimers()
  render(<App />)
  await screen.findByText(/User 1/)
  const input = screen.getByLabelText(/search/i)
  await userEvent.type(input, 'ser 1')
  // advance timers to trigger debounce
  vi.advanceTimersByTime(300)
  // expect highlights present
  const marks = await screen.findAllByTestId('hl')
  expect(marks.length).toBeGreaterThan(0)
  vi.useRealTimers()
})
