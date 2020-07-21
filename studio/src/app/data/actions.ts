import { Product } from '../types'

export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const UNSELECT_PRODUCT = 'UNSELECT_PRODUCT'
export const LOAD_SELECTED_PRODUCT = 'LOAD_SELECTED_PRODUCT'
export const INITIALIZE = 'INITIALIZE'

export const unselectProduct = () => ({
    type: UNSELECT_PRODUCT
})

export const selectProduct = (product: Product) => ({
    type: SELECT_PRODUCT,
    product
})

export const loadSelectedProduct = (productId: string) => ({
    type: LOAD_SELECTED_PRODUCT,
    productId
})

export const initialize = (data: any) => ({
    type: INITIALIZE,
    data
})