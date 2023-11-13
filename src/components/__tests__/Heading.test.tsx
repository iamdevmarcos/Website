import React from 'react'

import { screen, render } from '@testing-library/react'

import Heading from '../Heading'

describe('<Heading />', () => {
  it('should render correctly', () => {
    render(<Heading title="The Last of Us" />)
    expect(screen.getByText(/the last of us/i)).toBeInTheDocument()
  })
})
