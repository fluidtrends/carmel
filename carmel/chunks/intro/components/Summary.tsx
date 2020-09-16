import React from 'react'
import { Web } from 'jayesse'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

const { Text } = Web.Components 

export default (props: any) => {
    const { assets } = props 
    const { string } = assets 

    return (<div style={{
        padding: 80,
        backgroundColor: "#E1F5FE"
    }}>
        <Title level={1} style={{ textAlign: 'center' }}>
            { string('welcome')}
        </Title>
        <Title level={4} style={{ textAlign: 'center' }}>
             The Open2 Tech Marketplace that exists to help low-tech human workers develop on-demand tech skills
             and provide a better future for their families, by redefining human work in the machine era.
        </Title>
    </div>)
}