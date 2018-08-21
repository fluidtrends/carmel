import React, { Component } from 'react'
import { Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, Icon, Steps } from 'antd'

export default class TaskContainer extends Component {

	constructor(props) {
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
				alignItems: 'center'
			}}>
				<Card style={{ width, margin: '10px', padding, alignItems: 'center' }}>
					<Components.Text source={content[currentTask]} />
					{
						failedTask ?
						<div>
							<span style={{fontSize: 16}}>{errorMessage}</span>
							<Icon type='meh-o' style={{marginLeft: 10, color: '#d32f2f', fontSize: 16}} />
						</div>
						:
						null
					}
					{
						completedTask ?
							<div>
								<span style={{fontSize: 16}}>{successMessage}</span>
								<Icon type='smile-o' style={{marginLeft: 10, color: '#4CAF50', fontSize: 16}} />
							</div>
						:
							null
					}
					<CardActions style={{ justifyContent: 'center', marginTop: '20px' }}>
						<CardActionButtons style={{ marginLeft: '10px' }}>
							{
								finalTask && completedTask ?
									<Button
										type='primary'
										block
										style={{width: 200, height: 50, backgroundColor: '#00897B'}}
										onClick={() => this.props.showChallenge(activeTask, progress) }
									>
										<Icon type='code-o' />Retake challenge
									</Button>
								:
									!finalTask && completedTask ?
										<Button
											type='primary'
											block
											style={{width: 200, height: 50, backgroundColor: '#00897B'}}
											onClick={() => this.props.startNextTask(parseInt(activeTask) + 1) }
										>
											<Icon type='step-forward' />Start {nextTask}
										</Button>
									:
										<Button
											type='primary'
											block
											style={{width: 200, height: 50, backgroundColor: '#00897B'}}
											onClick={() => this.props.verifyTask(currentTask) }
										>
											<Icon type='check-circle' />Verify task
										</Button>
							}
						</CardActionButtons>
					</CardActions>
					<Steps style={{marginTop: '30px'}}>
						{
							tasks.map( task =>
								
								<Step 
								title={`Task ${task.taskNumber}`} 
								status={task.completed ? 'finish' : task.taskNumber === activeTask ? 'process' : 'wait'}
								icon={task.completed ? <Icon type='check-circle' /> : task.taskNumber === activeTask ? <Icon type='loading' /> : <Icon type='trophy' />}
									// icon={<Icon type={task.completed ? 'check-circle' :  } />}
								/>
							)
						}
					</Steps>
					<div style={{
						marginTop: 20
					}}>
						{
							parseInt(activeTask) !== 1 ?
							<Button
								type='primary'
								block
								style={{width: 200, height: 50, backgroundColor: '#00897B', marginRight: parseInt(activeTask) !== 1 && tasks[parseInt(activeTask) - 1].completed ? '30px' : ''}}
								onClick={() => this.props.goBack(parseInt(activeTask) - 1) }
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
								onClick={() => this.props.startNextTask(parseInt(activeTask) + 1) }
							>
								<Icon type='step-forward' />Go to {nextTask}
							</Button>
							:
							null
						}
					</div>

				</Card>
				<Card style={{ width, margin: '10px', padding, alignItems: 'center' }}>
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
        </Card>
			</div>
		)
	}

}