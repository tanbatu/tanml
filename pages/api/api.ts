import Parser from 'rss-parser'
import dayjs from 'dayjs'

export const getZennRssFeed = async () => {
    console.log(2)
  const feed = await new Parser().parseURL('https://zenn.dev/kshida/feed?all=1')
  return feed.items.map(item => ({
  return :{
    pagePosts: feed.items.map((item) => ({
      title: item.title ?? '',
      date: item.pubDate ? dayjs(item.pubDate).format('YYYY-MM-DD') : '',
      slug: item.link ?? 'https://zenn.dev/kshida',
    })),
    totalCount: feed.items.length,
  }
}))}