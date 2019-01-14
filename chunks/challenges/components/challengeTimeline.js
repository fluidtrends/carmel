import React, { PureComponent } from 'react'

import { Progress } from 'antd'

export default class Timeline extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const dummyData = [
      { taskId: 'tweak', completed: true },
      { taskId: 'tweak2', completed: true },
      { taskId: 'tweak3', completed: false }
    ]

    const taskNr = dummyData.length
    const completedTask = dummyData.filter(task => task.completed).length
    const currentTask = 2
    const percent = ((completedTask * 100) / taskNr).toFixed(0)
    return (
      <div
        style={{ fontSize: '14px', textAlign: 'center' }}
        className={'timeline-wrapper'}
      >
        Current Progress:
        <Progress percent={percent} strokeColor={'#00bcd4'} />
      </div>
    )
  }
}
