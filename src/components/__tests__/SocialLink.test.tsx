import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

import { screen, render } from '@testing-library/react'

import SocialLink from '../SocialLink'

describe('<SocialLink />', () => {
  it('should render correctly', () => {
    render(
      <SocialLink
        href="https://github.com/iamdevmarcos"
        icon={AiFillGithub}
        ariaLabel="Link for Github"
      />
    )

    expect(screen.getByLabelText(/link for github/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/link for github/i).parentElement
    ).toHaveProperty('href', 'https://github.com/iamdevmarcos')
  })
})
