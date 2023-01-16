import Hero from '~/components/blog/hero';
import Feed from '~/components/blog/feed';
import Latest from '~/components/blog/latest';
import Container from '~/containers/public'
import { useRouter } from 'next/router'
import { useCarmelPosts } from '~/sdk'

export default () => {
  const router = useRouter()
  const username: any = router.query.id
  // const slug: any = router.query.slug

  const posts: any = useCarmelPosts({ username })

  return (<Container>
      <Hero username={username}/>
      <Feed posts={posts.data} />
      {/* <Latest more={false} posts={posts} /> */}
  </Container>)
}