import DataProvider from '../DataProvider'

import {
  retrieveCachedItem,
  cacheItem,
  clearCachedItem
} from '../cache'

export default class CacheDataProvider extends DataProvider {

  create ({ nodes, options, props }) {
    // Look up the token to fetch
    const itemKey = nodes[0]

    // Send back the value
    return cacheItem(`carmel/${itemKey}`, props)
  }

  retrieve ({ nodes, options, props }) {
    // Look up the token to fetch
    const itemKey = nodes[0]

    // Send back the value
    return retrieveCachedItem(`carmel/${itemKey}`)
  }

  update ({ nodes, options, props }) {
    // Look up the token to fetch
    const itemKey = nodes[0]

    // First retrieve the old value
    return clearCachedItem(`carmel/${itemKey}`)

           // And then deep merge the new data
           .then(() => cacheItem(`carmel/${itemKey}`, props))
  }

  delete ({ nodes, options, props }) {
    // Look up the token to remove
    const itemKey = nodes[0]

    // Send back the value
    return clearCachedItem(`carmel/${itemKey}`)
  }

}
