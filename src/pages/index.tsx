import {
  BlogPosts,
  ContributedProjects,
  Introduction,
  Jobs,
  PersonalProjects,
  Videos
} from 'sections'

import { Layout } from 'components'
import { type PostProps } from 'components/Post'

export type HomeProps = {
  posts: PostProps[]
}

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <Jobs />
      <Videos />
      <BlogPosts />
      <PersonalProjects />
      <ContributedProjects />
    </Layout>
  )
}
