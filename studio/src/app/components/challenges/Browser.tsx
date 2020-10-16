import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Skeleton } from 'antd'
import { useSelector, useDispatch } from "react-redux"
import { State } from '../../types'
import { selectChallenge, unselectChallenge } from '../../data'

import { useRemote, useEvent } from '../../hooks'
import { Summary, Header, Details, Start } from '.'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Browser: any = (props: any) => {
    const { product, listChallengesEvent, onStart } = props
    const [ challenges, setChallenges] = useState([{}, {}, {}])
    const dispatch = useDispatch()
    const [ challenge, setChallenge ] = useState<any>(useSelector((state: State) => state.challenge))
    const [ browse, setBrowse ] = useState(challenge.name ? true : false)

    const onBrowse = () => {
      setBrowse(true)
    }

    const onStartChallenge = (c: any) => {
      onStart && onStart()
    }

    const onSelected = (c: any) => {
      dispatch(selectChallenge(c))
      setBrowse(true)
      setChallenge(c)
    }

    const onDeselected = () => {
      dispatch(unselectChallenge())
      setBrowse(true)
      setChallenge({})
    }

    useEffect(() => {
      listChallengesEvent.send({
          type: "listChallenges",
          productId: product.id
      })
    }, [product])

    useEffect(() => {
      if (!listChallengesEvent.received.challenges) return 
      setChallenges(listChallengesEvent.received.challenges)
    }, [listChallengesEvent.received])

    const showSummary = (c: any, i: number = 0) => (
      <Summary key={i} onSelected={onSelected} challenge={c}/>
    ) 

    const showList = () => (<div key={"main"} style={{ 
      width: 300, 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      textAlign: "center",
      padding: 10 
    }}>
        <Header title={"Choose a Challenge"}/>
        { 
          challenges.map(showSummary) 
        }
    </div>)

    return challenge.name ? (<Details onBack={onDeselected} onStart={onStartChallenge} challenge={challenge} product={product}> 
                                { showSummary (challenge)}
                            </Details>)
                          : browse ? showList() : <Start onBrowse={onBrowse}/>
}
