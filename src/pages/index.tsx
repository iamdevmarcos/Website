import {
  BlogPosts,
  ContributedProjects,
  Introduction,
  PersonalProjects,
  Videos
} from 'sections'

import { Layout } from 'components'
import { type PostProps } from 'components/Post'
import { GetStaticProps } from 'next'
import { fetchVideoByChannelID } from 'libs/youtube'
import { YoutubeVideo } from 'types/YoutubeVideo'

export type HomeProps = {
  posts: PostProps[]
  videos: YoutubeVideo[]
}

export default function Home({ videos }: HomeProps) {
  return (
    <Layout>
      <Introduction />
      {/* <Jobs /> */}
      <Videos videos={videos} />
      <BlogPosts />
      <PersonalProjects />
      <ContributedProjects />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const ytVideos = await fetchVideoByChannelID({
    channelId: process.env.RAPIDAPI_YOUTUBE_CHANNEL_ID || ''
  })

  return {
    props: {
      videos: ytVideos?.videos
    },
    revalidate: 3600 // 1 hour
  }
}
