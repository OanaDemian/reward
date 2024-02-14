import { fireEvent, render, screen } from '../../tests/testUtils';
import { About } from './About';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest'

describe('About', () => {
  it('renders the About component', async () => {
    render(<About isVisible={true} setAboutVisible={true}/>)
    expect(screen.queryAllByRole('dialog')).toBeTruthy();
  })
  
  it('displays the components heading', async () => {
    render(<About isVisible={true} setAboutVisible={true} />)
    await userEvent.click(screen.getByRole('heading', { name: 'How To Use' }))
     expect(screen.getByRole('heading', { name: 'How To Use' })).toBeVisible()
  })

  it('displays full text when Show More clicked', async () => {
    render(<About isVisible={true} setAboutVisible={true} />)
    await userEvent.click(screen.getByRole('button', { name: 'Show More' }))
    expect(screen.getByRole('button', { name: 'Show Less' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show Less' })).toBeEnabled()
  })

  it('displays partial text when Show Less clicked', async () => {
    render(<About isVisible={true} setAboutVisible={true} />)
    await userEvent.click(screen.getByRole('button', { name: 'Show More' }))
    // assert something here
    await userEvent.click(screen.getByRole('button', { name: 'Show Less' }))
    // expect(screen.getByRole('button', { name: 'Show More' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show More' })).toBeEnabled()
  })

  it('closes component when C loseIcon clicked', async () => {
    const handleClose = vi.fn()
    const { getByText} = render(<About isVisible={true} setAboutVisible={handleClose} />)
    expect(getByText('How To Use')).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})