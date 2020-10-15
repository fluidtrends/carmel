import { Product } from '../types'

export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const UNSELECT_PRODUCT = 'UNSELECT_PRODUCT'
export const LOAD_SELECTED_PRODUCT = 'LOAD_SELECTED_PRODUCT'
export const INITIALIZE = 'INITIALIZE'
export const TOGGLE_VAULT_STATUS = 'TOGGLE_VAULT_STATUS'
export const REGISTER = 'REGISTER'

export const unselectProduct = () => ({
    type: UNSELECT_PRODUCT
})

export const selectProduct = (product: Product) => ({
    type: SELECT_PRODUCT,
    product
})

export const register = (user: any) => ({
    type: REGISTER,
    user
})

export const loadSelectedProduct = (productId: string) => ({
    type: LOAD_SELECTED_PRODUCT,
    productId
})

export const initialize = (data: any) => ({
    type: INITIALIZE,
    data
})

export const toggleVaultStatus = () => ({
    type: TOGGLE_VAULT_STATUS
})