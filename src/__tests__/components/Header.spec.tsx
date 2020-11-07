import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '@/components/Header'

it('should render Header', () => {
  render(<Header />)
  const { getByText } = screen

  expect(getByText(/movies/i)).toBeInTheDocument()
})
