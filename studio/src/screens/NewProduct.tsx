import React from 'react'

import {
   Switch,
   Route
} from "react-router-dom"

import { NewProductScreenProps } from '../types'

 /**
 * 
 * @param props 
 */
export const NewProductScreen: React.FC<NewProductScreenProps> = (props) => {
  return (<h1>
      New Product Screen
  </h1>)
}