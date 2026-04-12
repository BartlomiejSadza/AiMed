import { render, screen } from '@testing-library/react'
import App from './App'
describe('App', () => {
  it('renderuje główną sekcję landing page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
