import { Layout } from 'components'
import { type PostProps } from 'components/Post'
import {
  BlogPosts,
  ContributedProjects,
  Introduction,
  PersonalProjects
} from 'sections'

export type HomeProps = {
  posts: PostProps[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Introduction />
      <BlogPosts posts={posts} />
      <PersonalProjects />
      <ContributedProjects />
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await fetch(
    `${process.env.DEV_TO_API_URL}/articles?username=iamdevmarcos`
  )

  return {
    props: {
      posts: await data.json()
    }
  }
}
