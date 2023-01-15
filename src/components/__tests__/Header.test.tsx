import React from 'react'

import { screen, render } from '@testing-library/react'

import Header from '../Header'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)
    expect(screen.getByText(/marcos mendes/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Linkedin Icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Github Icon/i)).toBeInTheDocument()
  })
})
