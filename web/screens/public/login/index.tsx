import Login from '~/components/login'
import Container from '~/containers/public'
import Connecting from '~/containers/connecting'

export default () => (
  <Container>
    <Connecting>
      <Login/>
    </Connecting>
  </Container>
)