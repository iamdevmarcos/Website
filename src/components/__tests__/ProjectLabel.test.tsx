import React from 'react'

import { screen, render } from '@testing-library/react'

import ProjectLabel from '../ProjectLabel'

describe('<ProjectLabel />', () => {
  it('should render correctly', () => {
    render(
      <ProjectLabel title="Star on Github" link="https://stars.github.com/" />
    )

    const textElement = screen.getByText(/star on github/i)

    expect(textElement).toBeInTheDocument()
    expect(textElement.parentElement).toHaveProperty(
      'href',
      'https://stars.github.com/'
    )
  })
})
