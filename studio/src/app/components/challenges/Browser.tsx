import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Skeleton } from 'antd'
import { useRemote, useEvent } from '../../hooks'
import { Summary } from './Summary'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Browser: any = (props: any) => {
    const { product } = props
    const listChallengesEvent: any = useEvent() 
    const [challenges, setChallenges] = useState([{}, {}, {}])

    useEffect(() => {
      listChallengesEvent.send({
          type: "listChallenges",
          productId: product.id
      })
    }, [])

    useEffect(() => {
      console.log(listChallengesEvent)
      if (!listChallengesEvent.received.challenges) return 
      setChallenges(listChallengesEvent.received.challenges)
    }, [listChallengesEvent.received])

    return challenges.map((challenge: any, i: number) => <Summary key={i} challenge={challenge}/>)
}
