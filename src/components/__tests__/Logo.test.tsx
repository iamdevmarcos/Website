import React from 'react'

import { screen, render, fireEvent } from '@testing-library/react'

import Logo from '../Logo'

describe('<Logo />', () => {
  it('should render correctly', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/logo/i)).toBeInTheDocument()
    expect(fireEvent.click(screen.getByLabelText(/logo/i))).toBeTruthy()
  })
})
