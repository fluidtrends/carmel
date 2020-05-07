import * as Config from '../config'
import * as Errors from '../errors'

export function retrieveCachedItem(key) {
  return new Promise((resolve, reject) => {
    storage.getItem(key, (error, value) => {
      if (error || !value || value === undefined) {
        // The item was not found locally
        reject(Errors.COULD_NOT_RETRIEVE_CACHED_ITEM())
        return
      }

      // Send back the parsed value
      resolve(JSON.parse(value))
    })
  })
}

export function cacheItem(key, value) {
  return new Promise((resolve, reject) => {
    storage.setItem(key, JSON.stringify(value), (error) => {
      if (error) {
        // Something went wrong when saving the item
        reject(Errors.COULD_NOT_CACHE_ITEM())
        return
      }

      // We're good to go
      resolve(value)
    })
  })
}

export function clearCachedItem(key) {
  return new Promise((resolve, reject) => {
    storage.removeItem(key, (error) => {
      if (error) {
        // The item could not be removed
        reject(Errors.COULD_NOT_CLEAR_CACHED_ITEM())
        return
      }
      resolve()
    })
  })
}
