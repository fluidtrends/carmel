import React from 'react'
import { Card, Button, Icon } from 'antd'

const Task = props => (
  <Card
    title={props.task.title}
    bordered={false}
    style={{ width: '100%', margin: '5px' }}
  >
    <p>{props.task.instructions}</p>
    <p>{props.task.help}</p>
    <Button
      onClick={() => props.goBack()}
      style={{
        display: 'flex',
        color: '#ffffff',
        backgroundColor: '#006064',
        border: 'none',
        margin: '10px auto 0',
        height: '35px',
        lineHeight: '15px'
      }}
    >
      <Icon type="arrow-left" />
      Go back
    </Button>
  </Card>
)

export default Task
