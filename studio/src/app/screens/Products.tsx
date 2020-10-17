import React, { useEffect, useState } from 'react'
import { ProductsScreenProps, State, Product } from '../types'
import { ProductListItem } from '../components'
import { useSelector, useDispatch } from "react-redux"
import { replace } from 'connected-react-router'
import { selectProduct } from '../data'
import { useEvent } from '../hooks'

/**
 * 
 * @param props 
 */
export const Products: React.FC<ProductsScreenProps> = (props) => {
  const products = useSelector((state: State) => state.products) 
  const dispatch = useDispatch()
  const selectEvent: any = useEvent() 

  const onAddProduct = () => {
    dispatch(replace('/newProduct'))
  }
  
  const onProductSelected = (product: Product) => {
    selectEvent.send({ type: 'selectProduct', product })
  }

  useEffect(() => {
    if (!selectEvent.received.id) return 
    dispatch(replace('/product'))
  }, [selectEvent.received])

  return (<div style={{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    overflow: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  }}>
    <ProductListItem key={'add'} onSelected={onAddProduct} isButton title={'New Product'}/>
    { products && products.map (product => <ProductListItem key={product.id} onSelected={onProductSelected} product={product}/>) }
  </div>)
}
