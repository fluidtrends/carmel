/* eslint-disable no-unused-expressions */

import savor from 'react-savor'
import { Providers, Errors } from '../../..'

savor.add('should create into cache', (context, done) => {
  const provider = new Providers.Cache()

    // Inject a mock adapter
  global.storage = { setItem: (key, value, callback) => callback() }

    // Attempt to create
  savor.promiseShouldSucceed(provider.operation({ type: 'create', nodes: ['test'], props: { hello: 'world' } }), done, () => {})
})

.add('should retrieve from cache', (context, done) => {
  const provider = new Providers.Cache()

    // Inject a mock adapter
  global.storage = { getItem: (key, callback) => callback(null, JSON.stringify({ test: 'test' })) }

    // Fetch an operation from the provider
  const operation = provider.operation({ type: 'retrieve', nodes: ['test'] })

    // Attempt to retrieve
  savor.promiseShouldSucceed(operation, done, (value) => context.expect(value.test).is.equal('test'))
})

.add('should update into cache', (context, done) => {
  const provider = new Providers.Cache()

    // Inject a mock adapter
  global.storage = {
    setItem: (key, value, callback) => callback(),
    removeItem: (key, callback) => callback(),
    getItem: (key, callback) => callback(null, JSON.stringify({ test: 'old' })) }

    // Fetch an operation from the provider
  const operation = provider.operation({ type: 'update', nodes: ['test'], props: { test: 'test' } })

    // Attempt to update
  savor.promiseShouldSucceed(operation, done, (value) => context.expect(value.test).is.equal('test'))
})

.add('should remove from cache', (context, done) => {
  const provider = new Providers.Cache()

    // Inject a mock adapter
  global.storage = { removeItem: (key, callback) => callback() }

    // Fetch an operation from the provider
  const operation = provider.operation({ type: 'delete', nodes: ['test'] })

    // Attempt to delete
  savor.promiseShouldSucceed(operation, done, () => {})
})

.run('Cache Data Provider')
