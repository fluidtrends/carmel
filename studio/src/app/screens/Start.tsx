import React, { useEffect } from 'react'
import { StartScreenProps, State } from '../types'
import { Spin } from 'antd'
import * as styles from '../styles'
import strings from '../strings.json'
import { useEvent } from '../hooks'
import { replace } from 'connected-react-router'
import { useDispatch, useSelector } from "react-redux"
import { initialize } from '../data'

/**
 * 
 * @param props 
 */
export const Start: React.FC<StartScreenProps> = (props) => {
  const loadEvent: any = useEvent() 
  const dispatch = useDispatch()

  useEffect(() => {
    loadEvent.send({ type: 'startSession' })
  }, [])

  useEffect(() => {
    if (!loadEvent.received.id) return
    
    if (!loadEvent.received.session) {
      dispatch(replace('/welcome'))
      return 
    }

    const screen = loadEvent.received.session.productId ? '/product' : '/products'
    dispatch(replace(screen))
  }, [loadEvent.received])

  return (<div style={styles.screen}>
     <Spin tip={strings.initializing}/>
  </div>)
}