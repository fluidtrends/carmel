import React, { useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    loadEvent.send({ type: 'load' })
  }, [])

  useEffect(() => {
    loadEvent.received.type === 'loaded' && dispatch(initialize(loadEvent.received)) 
  }, [loadEvent])

  useEffect(() => {
    if (!session.modifiedTimestamp) return

    const { modifiedTimestamp, createdTimestamp } = session
    setTimeout(() => {
      if (modifiedTimestamp !== createdTimestamp) {
        dispatch(replace('/welcome'))
        return 
      }
      dispatch(replace(session.productId ? '/product' : '/products'))
    }, 1000)
  }, [session])
  
  return (<div style={styles.screen}>
     <Spin tip={strings.initializing}/>
  </div>)
}