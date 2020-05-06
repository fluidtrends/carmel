import * as common from './common'

export const hasAuthToken = common.hasData("auth")
export const hasAuthTokenError = common.hasError("auth")

export const getAuthTokenError = common.getError("auth")
export const getAuthToken = common.getData("auth")
export const getAuthTokenTimestamp = common.getTimestamp("auth")
