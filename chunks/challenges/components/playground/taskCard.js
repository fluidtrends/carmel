import React from 'react'
import { Card, Button, Icon } from 'antd'

const TaskCard = props => (
  <Card
    title={props.task.title}
    bordered={false}
    style={{ width: '100%', margin: '5px' }}
  >
    <Button
      onClick={() => props.onSelectTask(props.task)}
      style={{
        display: 'flex',
        color: '#ffffff',
        backgroundColor: props.task.completed ? '#4CAF50' : '#03A9F4',
        border: 'none',
        margin: '10px auto 0',
        height: '35px',
        lineHeight: '15px'
      }}
    >
      {props.task.completed ? 'Retake Task' : 'Start Task'}{' '}
      <Icon type="caret-right" />
    </Button>
  </Card>
)

export default TaskCard
