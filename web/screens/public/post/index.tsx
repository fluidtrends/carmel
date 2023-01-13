import Post from '~/components/blog/post'
import Container from '~/containers/public'
import { useRouter } from 'next/router'
import { useCarmelPost } from '~/sdk'

export default () => {
  const router = useRouter()
  const username: any = router.query.id
  const slug: any = router.query.slug

  const post: any = useCarmelPost({ username, slug })
  
  return (<Container>
    <Post post={post}/>
  </Container>)
}