import { Layout } from 'components'
import {
  BlogPosts,
  ContributedProjects,
  Introduction,
  PersonalProjects
} from 'sections'

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <BlogPosts />
      <PersonalProjects />
      <ContributedProjects />
    </Layout>
  )
}
