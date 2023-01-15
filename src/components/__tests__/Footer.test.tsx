import React from 'react'

import { screen, render } from '@testing-library/react'

import Footer from '../Footer'

describe('<Footer />', () => {
  it('should render correctly', () => {
    render(<Footer />)
    expect(
      screen.getByText('Made with 🤍 by Marcos Mendes and deployed at ▲ Vercel')
    ).toBeInTheDocument()
  })
})
