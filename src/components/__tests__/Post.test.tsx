import React from 'react'

import { screen, render } from '@testing-library/react'

import Post, { PostProps } from '../Post'

describe('<Post />', () => {
  it('should render correctly', () => {
    const props: PostProps = {
      id: 1,
      canonical_url: 'https://jsonplaceholder.typicode.com/posts/1',
      cover_image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      reading_time_minutes: 5,
      tag_list: ['test', 'js'],
      title: 'Blog post 1',
      type_of: 'blog post'
    }

    render(<Post {...props} />)

    expect(
      screen.getByRole('img', {
        name: props.title
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: props.title
      })
    ).toHaveProperty('src', props.cover_image)

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(/5 min read/i)).toBeInTheDocument()
  })
})
