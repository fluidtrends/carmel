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
  const session = useSelector((state: State) => state.session)
  const products = useSelector((state: State) => state.products)

  useEffect(() => {
    loadEvent.send({ type: 'load' })
  }, [])

  useEffect(() => {
    if (!loadEvent.received.id) return
    
    if (loadEvent.received.type === 'firstTime') {
      dispatch(replace('/welcome'))
      return 
    }

    loadEvent.received.type === 'loaded' && dispatch(initialize(loadEvent.received)) 
  }, [loadEvent.received])

  useEffect(() => {
    if (!session.loadedTimestamp) return

    const screen = session.productId ? '/product' : '/products'  
    dispatch(replace(screen))
  }, [session])
  
  return (<div style={styles.screen}>
     <Spin tip={strings.initializing}/>
  </div>)
}