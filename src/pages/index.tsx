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

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Introduction />
      <Jobs />
      <Videos />
      <BlogPosts posts={posts} />
      <PersonalProjects />
      <ContributedProjects />
    </Layout>
  )
}

export async function getServerSideProps() {
  const posts = await fetch(
    `${process.env.DEV_TO_API_URL}/articles?username=iamdevmarcos`
  )

  return {
    props: {
      posts: await posts.json()
    }
  }
}
