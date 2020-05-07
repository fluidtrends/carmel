import Error from '../Error'

// Generic API Errors
export const TIMEOUT_ERROR = () => new Error('The operation timed out')
export const WARNING_EMPTY_RESPONSE = 'The response returned with an empty response'
export const WARNING_INVALID_RESPONSE = 'The response returned with an invalid response'
