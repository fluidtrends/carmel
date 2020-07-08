import React from 'react'

import {
   Switch,
   Route
} from "react-router-dom"

import { MainScreenProps } from '../types'

 /**
 * 
 * @param props 
 */
export const MainScreen: React.FC<MainScreenProps> = (props) => {
  return (<h1>
      Main Screen
  </h1>)
}