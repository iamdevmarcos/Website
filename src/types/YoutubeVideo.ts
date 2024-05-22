export type YoutubeVideo = {
  video_id: string
  title: string
  channel_id: string
  thumbnails: {
    url: string
    width: number
    height: number
  }[]
}
