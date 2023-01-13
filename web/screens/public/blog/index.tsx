import Hero from '~/components/blog/hero';
import Feed from '~/components/blog/feed';
import Latest from '~/components/blog/latest';
import Container from '~/containers/public'

export default () => {
  return (<Container>
      <Hero />
      <Feed posts={[]} />
      <Latest more={false} posts={[]} />
  </Container>)
}