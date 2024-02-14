import { render, screen } from '../tests/testUtils'
import { App } from './App'

describe('App', () => {
  it('renders the App component', async () => {
    render(<App />)
    expect(await screen.findByRole('heading', { name: 'Variable Ratio Generator' })).toBeVisible()
  })
})