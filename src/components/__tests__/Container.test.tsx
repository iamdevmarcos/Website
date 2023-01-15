import React from 'react'

import { screen, render } from '@testing-library/react'

import Container from '../Container'

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Container>
        <h1>My heading</h1>
      </Container>
    )

    expect(
      screen.getByRole('heading', { name: /my heading/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle('max-width: 90rem')
    expect(container.firstChild).toHaveStyle({
      'max-width': '90rem',
      margin: '0 auto',
      padding: '0 3rem'
    })
  })
})
