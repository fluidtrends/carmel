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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
      <Button
        onClick={() => props.verify()}
        style={{
          display: 'flex',
          color: '#ffffff',
          backgroundColor: `#4CAF50`,
          border: 'none',
          margin: '10px auto 0',
          height: '35px',
          lineHeight: '15px'
        }}
      >
        <Icon type="check-circle" />
        Verify Task
      </Button>
    </div>
  </Card>
)

export default Task
