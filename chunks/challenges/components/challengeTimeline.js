import React, { PureComponent } from 'react'

import { Icon, Steps } from 'antd'

export default class Timeline extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const dummyData = [
      { taskId: 'tweak', completed: true },
      { taskId: 'tweak2', completed: false }
    ]
    const { Step } = Steps
    const taskNr = dummyData.length
    const completedTask = dummyData.filter(task => task.completed).length
    const currentTask = 2
    return (
      <Steps size="small" current={1} direction="vertical">
        <Step
          title={`Tasks completed: ${completedTask}/${taskNr}`}
          icon={<Icon type="check-circle" style={{ color: '#00bcd4' }} />}
        />
        <Step
          title={`Current task number: ${currentTask}`}
          icon={<Icon type="loading" style={{ color: '#00bcd4' }} />}
        />
        <Step
          title={`${taskNr - completedTask} Task Remaining`}
          icon={
            <img
              src={'assets/chunky-logo.gif'}
              style={{ width: '30px', marginTop: '-5px' }}
            />
          }
        />
      </Steps>
    )
  }
}
