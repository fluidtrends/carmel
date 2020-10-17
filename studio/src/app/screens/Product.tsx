import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ProductScreenProps, State, Chunk } from '../types'
import { useSelector, useDispatch } from "react-redux"
import { Carousel, Layout, Spin } from 'antd'
import { unselectProduct, selectProduct, initialize } from '../data'
import { useEvent } from '../hooks'
import { Challenges } from '../components/challenges'
import { Workspace } from '../components/workspace'
import { seed } from 'shortid'

/**
 * 
 * @param props 
 */
export const Product: React.FC<ProductScreenProps> = (props) => {
  const { width, height } = props
  const [working, setWorking] = useState(true)
  let [challenge, product, session, profile] = useSelector((state: State) => [state.challenge, state.product, state.session, state.profile]) 
  const [commandResponse, setCommandResponse] = useState({})
  const dispatch = useDispatch()

  const loadEvent: any = useEvent() 
  const command: any = useEvent()
  const listChallengesEvent: any = useEvent() 

  const onReload = () => {
    console.log("reload...")
    setWorking(true)
    loadEvent.send({ type: 'load' })
  }

  useEffect(() => {
    onReload()
  }, [])

  useEffect(() => {
    if(!loadEvent.received.id) return
    dispatch(initialize(loadEvent.received))
  }, [loadEvent.received])

  useEffect(() => {
    if (!product.id) return
    setWorking(false)
  }, [product])

  useEffect(() => { 
    if (!command.received.id) return 

    setCommandResponse(command.received)
    command.received.done && onReload()
  }, [command.received])

  if (working) {
    return <Spin/>
  }

  return (
    <Layout style={{ 
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#f5f5f5",
      alignItems: "flex-start",
      padding: 0,
      margin: 0,
      width: "100%",
      height: "100%",
      justifyContent: "flex-start"
    }}>
      <Workspace
        height={height}
        command={command}
        challenge={challenge}
        profile={profile}
        onReload={onReload}
        session={session}
        commandResponse={commandResponse}
        product={product}/>

      <Challenges 
        listChallengesEvent={listChallengesEvent}
        height={height}
        onReload={onReload}
        challenge={challenge}
        profile={profile}
        session={session}
        product={product} />
  </Layout>)
}

