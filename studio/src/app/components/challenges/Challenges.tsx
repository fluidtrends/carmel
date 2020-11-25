import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Spin } from 'antd'
import { Auth, Browser, Tasks } from '.'
import { useSelector, useDispatch } from "react-redux"
import { useRemote, useEvent } from '../../hooks'
import { State } from '../../types'
import { selectChallenge, unselectChallenge } from '../../data'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Challenges: React.FC<any> = (props) => {
    const { product, onReload, session, profile, challenge, listChallengesEvent } = props
    const [needAuth, setNeedAuth] = useState(false)
    const [starting, setStarting] = useState(false)
    const [progress, setProgress] = useState<any>()
    const [completed, setCompleted] = useState<any>([])
    const startChallenge: any = useEvent()
    const validateTask: any = useEvent()
    const updateProgress: any = useEvent()
    const dispatch = useDispatch()

    const onValidate = () => {
      validateTask.send({
          type: "validateTask",
          product,
          progress,
          challenge
      })
    }

    const onDone = () => {
      setStarting(false)
    }

    const onStart = () => {
      if (!session || !session.user) {
        setNeedAuth(true)
        return
      }

      setStarting(true)
      startChallenge.send({
          type: "startChallenge",
          product,
          challenge
      })
    }

    const onCancelAuth = () => {
      setNeedAuth(false)
    }

    useEffect(() => {
      if (!startChallenge.received.id) return
       dispatch(unselectChallenge())
       setStarting(false)
       onReload && onReload()
    }, [startChallenge.received])

    useEffect(() => {
      if (!validateTask.received.id) return

      updateProgress.send({
        type: "updateProgress",
        product,
        challenge,
        progress,
        error: validateTask.received.error,
        results: {}
      })

    }, [validateTask.received])

    useEffect(() => {
      if (!updateProgress.received.id) return
      onReload && onReload()
    }, [updateProgress.received])

    useEffect(() => {
      setProgress('')

      if (!profile || !profile.challenges || !profile.challenges[product.id]) {
        // No progress for this product 
        return
      }

      const { completed, inProgress } = profile.challenges[product.id]
      setCompleted(completed)
      
      if (inProgress.length === 0) {
        // Nothing in progress for this product
        return
      }

      setProgress(inProgress[0])
    }, [profile])    

    const showWork = () => {
      return <div style={{ 
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}>
        <Spin/>
      </div>
    }

    const showContents = () => {
      return progress ? <Tasks progress={progress} onDone={onDone} onValidate={onValidate}/> 
                      : starting ? showWork()
                      : needAuth ? <Auth onBack={onCancelAuth}/> 
                      : <Browser completed={completed} onStart={onStart} product={product} listChallengesEvent={listChallengesEvent}/> 
    }

    return (<div
        style={{ 
          overflow: "auto", 
          margin: 0, 
          display: 'flex',
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "justify",
          backgroundColor: "#FFFFFF", 
          padding: 10,
          width: "100%",
          height: "100%"
        }}> 
          { showContents() }
        </div>)
}