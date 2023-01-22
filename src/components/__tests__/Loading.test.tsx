import React from 'react'

import { screen, render } from '@testing-library/react'

import Loading from '../Loading'

describe('<Loading />', () => {
  it('should render correctly', () => {
    render(<Loading />)
    expect(
      screen.getByRole('img', {
        name: /loading/i
      })
    ).toBeInTheDocument()
  })
})
