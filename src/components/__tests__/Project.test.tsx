import React from 'react'

import { screen, render } from '@testing-library/react'

import Project, { ProjectProps } from '../Project'

describe('<Project />', () => {
  const props: ProjectProps = {
    name: 'My cool project',
    description: 'This is a description for my cool project'
  }

  it('should render correctly', () => {
    render(<Project {...props} />)

    expect(screen.getByText(props.name)).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
  })

  it('should render a github label', () => {
    render(
      <Project
        {...props}
        githubLink="https://github.com/iamdevmarcos/nextjs-boilerplate"
      />
    )

    expect(screen.getByLabelText(/github link/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/github link/i)).toHaveProperty(
      'href',
      'https://github.com/iamdevmarcos/nextjs-boilerplate'
    )

    expect(screen.queryByLabelText(/npm link/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/preview link/i)).not.toBeInTheDocument()
  })

  it('should render a npm label', () => {
    render(
      <Project
        {...props}
        npmLink="https://www.npmjs.com/package/@marcosdev.me/uselocalstorage"
      />
    )

    expect(screen.getByLabelText(/npm link/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/npm link/i)).toHaveProperty(
      'href',
      'https://www.npmjs.com/package/@marcosdev.me/uselocalstorage'
    )

    expect(screen.queryByLabelText(/github link/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/preview link/i)).not.toBeInTheDocument()
  })

  it('should render a preview label', () => {
    render(
      <Project
        {...props}
        previewLink="https://play.google.com/store/apps/details?id=com.iamdevmarcos.mynotes"
      />
    )

    expect(screen.getByLabelText(/preview link/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/preview link/i)).toHaveProperty(
      'href',
      'https://play.google.com/store/apps/details?id=com.iamdevmarcos.mynotes'
    )

    expect(screen.queryByLabelText(/github link/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/npm link/i)).not.toBeInTheDocument()
  })
})
