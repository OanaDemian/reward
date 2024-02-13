import { render, screen, testTheme } from '../tests/testUtils'
import { App } from './App'

describe('App', () => {
  it('renders the App component', async () => {
    render(<App theme={testTheme} colorMode="light" />)
    expect(await screen.findByRole('heading', { name: 'Variable Ratio Generator' })).toBeVisible()
  })
})