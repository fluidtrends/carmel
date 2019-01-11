import React from 'react'
import { Card } from 'antd'

const Task = props => (
  <Card
    title={props.task.title}
    bordered={false}
    style={{ width: '100%', margin: '5px' }}
  >
    <p>{props.task.instructions}</p>
    <p>{props.task.help}</p>
  </Card>
)

export default Task
