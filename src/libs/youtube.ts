const YOUTUBEAPI_HOST = process.env.RAPIDAPI_YOUTUBE_HOST as string
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY as string

export const fetchVideoByChannelID = async ({
  channelId
}: {
  channelId: string
}) => {
  const url = `${YOUTUBEAPI_HOST}/channel/videos?channel_id=${channelId}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY
    }
  }

  const response = await fetch(url, options)
  return response.json()
}
