import React, { Component } from 'react'
import { Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, Icon, Steps } from 'antd'
import {
  Drawer,
  DrawerHeader,
  DrawerContent
} from 'rmwc/Drawer';

export default class TaskContainer extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { width, padding, content, activeTask, completedTask, failedTask, tasks, progress, successMessage, errorMessage, finalTask } = this.props
    const currentTask = `task${activeTask}`
    const nextTask = `task ${parseInt(activeTask) + 1}`
    const previousTask = `task ${parseInt(activeTask) - 1}`
    const { Step } = Steps

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
        <Drawer
          temporary
          open={this.props.showDrawer}
          onClose={this.props.closeTaskDetails}
        >
          <DrawerHeader>
            Task content
          </DrawerHeader>
          <DrawerContent>
            <Components.Text source={'https://raw.githubusercontent.com/fluidtrends/carmel/challenges-chunk/challenges/define-your-brand/challenge1/task1.md'} />
            <Steps direction={'vertical'} style={{marginTop: '30px'}}>
              {
                tasks.map(task =>

    <Step
      key={task.taskNumber}
      title={`Task ${task.taskNumber}`}
      status={task.completed ? 'finish' : task.taskNumber === activeTask ? 'process' : 'wait'}
      icon={task.completed ? <Icon type='check-circle' /> : task.taskNumber === activeTask ? <Icon type='loading' /> : <Icon type='trophy' />}
                    // icon={<Icon type={task.completed ? 'check-circle' :  } />}
                  />
                )
              }
            </Steps>
            {
              finalTask && completedTask ?
          <Button
          type='primary'
          block
          style={{width: 200, height: 30, backgroundColor: '#00897B'}}
          onClick={() => this.props.showChallenge(activeTask, progress)}
                >
          <Icon type='code-o' />Retake challenge
                </Button>
              :
                !finalTask && completedTask ?
          <Button
          type='primary'
          block
          style={{width: 200, height: 30, backgroundColor: '#00897B'}}
          onClick={() => this.props.startNextTask(parseInt(activeTask) + 1)}
                  >
          <Icon type='step-forward' />Start {nextTask}
          </Button>
                :
          <Button
          type='primary'
          block
          style={{width: 200, height: 40, backgroundColor: '#00897B', alignSelf: 'center'}}
          onClick={() => this.props.verifyTask(currentTask)}
                  >
          <Icon type='check-circle' />Verify task
                  </Button>
            }
          </DrawerContent>
        </Drawer>
          {
	// 					failedTask ?
  // <div>
  //   <span style={{fontSize: 16}}>{errorMessage}</span>
  //   <Icon type='meh-o' style={{marginLeft: 10, color: '#d32f2f', fontSize: 16}} />
  // </div>
	// 					:
	// 					null
					}
          {
	// 					completedTask ?
  // <div>
  //   <span style={{fontSize: 16}}>{successMessage}</span>
  //   <Icon type='smile-o' style={{marginLeft: 10, color: '#4CAF50', fontSize: 16}} />
  // </div>
	// 					:
	// 						null
					}
          {/* <div style={{
            marginTop: 20
          }}>
            {
							parseInt(activeTask) !== 1 ?
  <Button
    type='primary'
    block
    style={{width: 200, height: 50, backgroundColor: '#00897B', marginRight: parseInt(activeTask) !== 1 && tasks[parseInt(activeTask) - 1].completed ? '30px' : ''}}
    onClick={() => this.props.goBack(parseInt(activeTask) - 1)}
							>
    <Icon type='step-backward' />Go back to {previousTask}
  </Button>
							:
							null
						}
            {
							!finalTask && tasks[parseInt(activeTask) - 1].completed ?
  <Button
    type='primary'
    block
    style={{width: 200, height: 50, backgroundColor: '#00897B'}}
    onClick={() => this.props.startNextTask(parseInt(activeTask) + 1)}
							>
    <Icon type='step-forward' />Go to {nextTask}
  </Button>
							:
							null
						}
          </div> */}
        {/* <Card style={{ width, margin: '10px', padding, alignItems: 'center' }}>
          <div style={{margin: 30}}>
            <Button
              type='primary'
              block
              style={{width: 200, height: 50}}
              onClick={() => this.props.showChallenge(activeTask, progress)}
            >
              <Icon type='arrow-left' />Go back to challenge
            </Button>
          </div>
        </Card> */}
      </div>
    )
  }

}
