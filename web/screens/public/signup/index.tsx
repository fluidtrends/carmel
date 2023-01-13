import Container from '~/containers/public'
import Signup from '~/components/signup'
import Connecting from '~/containers/connecting'

export default () => (
  <Container>
    <Connecting>
      <Signup/>
    </Connecting>
  </Container>
)