import Error from '../Error'

// Generic Errors
export const COULD_NOT_RETRIEVE_CACHED_ITEM = () => new Error('Unable to retrieve cached item')
export const COULD_NOT_CLEAR_CACHED_ITEM = () => new Error('Unable to clean up the cached item')
export const COULD_NOT_CACHE_ITEM = () => new Error('Unable to cache item')
export const UNABLE_TO_LOAD_APP = () => new Error('Unable to load the application')
export const UNABLE_TO_LOAD_CHUNKS = () => new Error('Unable to load chunks')
export const UNDEFINED_OPERATION = () => new Error(`Operation Is Not Defined`)
