import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Divider, Skeleton, Tag, Badge } from 'antd'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Summary: any = (props: any) => {
    const { challenge, onSelected } = props

    const { details, id, name, skills, title, summary } = challenge
   
    const onChallengeSelected = () => {
        onSelected && onSelected(challenge)
    }

    if (!name) {
        return <Card 
            hoverable
            key={"loader"} style={{ width: 300, marginTop: 16, padding: 10 }} loading/>
    }

    return <Card 
            hoverable
            onClick={onChallengeSelected}
            key={id} style={{ width: 300, marginTop: 16, padding: 10 }} loading={false}>
            <Meta
                title={title}
                description={summary}
        />

        <Divider orientation="center" style={{ marginTop: 12 }}>Skills:</Divider>
        <div style={{ marginBottom: 4, textAlign: "center" }}>
        { Object.keys(skills).map((skill: any, i: number) => (
            <Tag color="green" key={i} style={{ marginTop: 0, padding: 4, paddingLeft: 10, paddingRight: 10, fontSize: 13 }}> { skill } 
                <Badge count={skills[skill]} style={{ 
                    marginTop: -4,
                    marginLeft: 5, 
                    fontSize: 10,
                    backgroundColor: '#52c41a' 
                }}/>
            </Tag>
        ))}
        </div>
    </Card>
}