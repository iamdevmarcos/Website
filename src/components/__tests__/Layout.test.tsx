import React from 'react'

import { screen, render } from '@testing-library/react'

import Layout from '../Layout'

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mockHeader"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mockFooter"></div>
    }
  }
})

describe('<Layout />', () => {
  it('should render correctly', () => {
    render(
      <Layout>
        <h1>Something</h1>
      </Layout>
    )

    expect(
      screen.getByRole('heading', { name: /something/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('mockHeader')).toBeInTheDocument()
    expect(screen.getByTestId('mockFooter')).toBeInTheDocument()
  })
})
