import { toggleColorMode} from './toggleColorMode';

describe('setColorMode', () => {
  it('changes the color mode from light to dark', () => {
    const mode = 'light'
    expect(toggleColorMode(mode)).toBe('dark')
  })
  it('changes the color mode from dark to light', () => {
    const mode = 'dark'
    expect(toggleColorMode(mode)).toBe('light')
  })
})
