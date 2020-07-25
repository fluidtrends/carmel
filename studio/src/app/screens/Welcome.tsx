import React, { memo, useEffect, useCallback, useState, useRef } from 'react'
import { Typography, Progress } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import { WelcomeScreenProps, State } from '../types'
import { useEvent } from '../hooks'
import * as styles from '../styles'
import { replace } from 'connected-react-router'
// import { setup } from 'src/main/events'
import { initialize } from '../data'
import Player from 'react-player'
import { Fade } from 'react-awesome-reveal'

const { Title, Text } = Typography

const TICK = 300
const TICKS = 100

import { asset } from '../../main/assets'
import intro from '../../intro.json'
const introVideo = require(`../../../assets/${(intro as any).video}`).default

/**
 * 
 * @param props 
 */
export const Welcome: React.FC<WelcomeScreenProps> = (props) => {
  const slides = useRef(null)
  const player = useRef(null)
  const setupEvent: any = useEvent() 
  const loadEvent: any = useEvent() 
  const [status, setStatus] = useState('Setting up your environment ...')
  const [timer, setTimer] = useState<any>()
  const [slideId, setSlideId] = useState(0)
  const [time, setTime] = useState(0)
  
  const session = useSelector((state: State) => state.session)
  // const products = useSelector((state: State) => state.products)

  const dispatch = useDispatch()
  
  useEffect(() => {
    setupEvent.send({ type: "setup" })
  }, [])

  useEffect(() => {
    if (time >= TICKS) {
      setSlideId((intro as any).slides.length === slideId + 1 ? 0 : slideId + 1)
      setTime(0)
      return
    }     
  }, [time])

  useEffect(() => {
    if (!setupEvent.received.id) return 

    console.log("setupEvent", setupEvent.received)
    
    const { status } = setupEvent.received
    setStatus(`${status}`)

    if (setupEvent.received.done) {
      loadEvent.send({ type: 'load' })
    }
 }, [setupEvent.received])

  const onVideoDone = () => {
    setTimer(setInterval(() => setTime(t => t + 1), TICK))
  }

  useEffect(() => {
    if (!loadEvent.received.id) return
    console.log("loadEvent", loadEvent.received)
    loadEvent.received.type === 'loaded' && dispatch(initialize(loadEvent.received)) 
  }, [loadEvent.received])

  useEffect(() => {
    if (!session.loadedTimestamp) return
    console.log("session", session)
    clearInterval(timer)
    dispatch(replace('/product'))
  }, [session])

  const Slide = (slide: any) => {
    return (<div style={{
      width: "100%",
      display: "flex",
      flex: 1,
      backgroundColor: "#ffffff",
      padding: 20,
      opacity: (((TICKS - time)*1.5)/(TICKS)),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }}>
        <div style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Title style={{
            color: "#5FB0E5"
          }}> { slide.title } </Title>
          <Title level={4} style={{
            textAlign: "justify",
            color: "#607D8B"
          }}> { slide.text } </Title>
        </div>
        <div style={{
            display: "flex",
            flex: 1,          
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
          <img src={require(`../../../assets/${slide.image}`).default} style={{
          width: "100%"
        }}/>
      </div>
    </div>)
  }

  const IntroSlides = () => {
    const slide = (intro as any).slides[slideId]
    return (<div style={{
      display: "flex",
      height: "100%",
      backgroundColor: "#ffffff",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center"
    }}>
       <img src={require(`../../../assets/icon-216.png`).default} style={{
          height: 80,
          margin: 20,
          opacity: (((TICKS - time)*1.5)/(TICKS)),
      }}/>
      <Slide key={slide.id} {...slide} style={{
        display: "flex", 
        height: "100%",
        flex: 1
      }}/>
      <Progress
        style={{
          margin: 10
        }}
        showInfo={false}
        strokeColor={{
          from: '#EDF6FC',
          to: '#5FB0E5',
        }}
        percent={time}
        status="active"
    />
    </div>)
  }

  const IntroVideo = () => (<Player 
    ref={player}
    onEnded={onVideoDone}
    url={introVideo}
    playing
    style={{
      background: "#fffff",
    }}
    width="100%"
    height="100%"
  />)

  return (<div style={styles.screen}>      
    { timer ? <IntroSlides/> : <IntroVideo/> }
  </div>)
}