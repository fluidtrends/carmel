import React, { PureComponent } from 'react'

import { Progress } from 'antd'

export default class Setup extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { taskNr, completedTasks } = this.props

    const percent = ((completedTasks * 100) / taskNr).toFixed(0)

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
