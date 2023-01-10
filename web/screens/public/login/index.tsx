import Login from '~/components/login'
import Container from '~/containers/public'
import Connecting from '~/components/connecting'

export default () => (
  <Container>
    <Connecting>
      <Login/>
    </Connecting>
  </Container>
)