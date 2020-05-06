/* eslint-disable no-unused-expressions */

import savor from 'react-savor'
import { Providers, Errors } from '../../..'

savor

.add('should remove from local', (context, done) => {
  const provider = new Providers.Local()

    // Fetch an operation from the provider
  const operation = provider.operation({ type: 'delete', nodes: ['test'] })

    // Attempt to delete
  savor.promiseShouldSucceed(operation, done, () => {})
})

.add('should retrieve from local', (context, done) => {
  const provider = new Providers.Local()

    // Fetch an operation from the provider
  const operation = provider.operation({ type: 'retrieve', nodes: ['test'] })

    // Attempt to delete
  savor.promiseShouldSucceed(operation, done, () => {})
})

.run('Local Data Providers')
