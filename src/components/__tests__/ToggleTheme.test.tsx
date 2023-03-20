import React from 'react'

import { screen, render } from '@testing-library/react'

import ToggleTheme from '../ToggleTheme'

describe('<ToggleTheme />', () => {
  it('should render toggle button', () => {
    render(<ToggleTheme />)
    expect(screen.getByLabelText(/toggle theme button/i)).toBeInTheDocument()
  })
})
