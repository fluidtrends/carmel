import React, { Component } from "react"
import { Divider, Button, Alert, Card, Typography } from 'antd'
import Markdown from 'react-markdown'
import headerImage from '../../assets/header-api.png'
import Loading from './Loading'

const { Meta } = Card
const { Text } = Typography

class TaskView extends Component {

  constructor() {
    super()

    this.state = {}
    this._onValidateTask = this.onValidateTask.bind(this)
    this._onPauseTask = this.onPauseTask.bind(this)

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  renderError() {
    if (!this.props.taskValidationError) {
      return <div/>
    }

    return <Alert
      message="Error"
      description={this.props.taskValidationError}
      type="error"
      showIcon
    />
  }

  componentDidUpdate(props, state) {
    if (this.state.timestamp === props.session.timestamp) {
      return 
    }

    this.setState({ loading: false, timestamp: props.session.timestamp })
  }

  onValidateTask() {
    this.setState({ loading: true, timestamp: this.props.session.timestamp })
    this.props.session.validateTask({ 
        challengeId: this.props.challenge.id,
        productId: this.props.product.id
    })
  }

  onPauseTask() {
    this.setState({ loading: true, timestamp: this.props.session.timestamp })
    this.props.session.pauseChallenge({ 
        challengeId: this.props.challenge.id,
        productId: this.props.product.id
    })
  }

  renderTaskTutorial() {
    return <Markdown source={this.props.taskTutorial}/>
  }

  get taskIndex() {
    return (this.props.challenge.state ? this.props.challenge.state.taskIndex : 0)
  }
  
  render() {
    if (this.state.loading) {
      return <Loading/>
    }

    return <div>
      { this.renderError() }
      <Card
            style={{ width: "100%", marginBottom: "20px" }}
            actions={[<Button
                icon={"check-circle"}
                disabled={this.state.progress}
                onClick={this._onValidateTask}
                type="primary"
                style={{
                }}>
                Done
            </Button>,
            <Button
            disabled={this.state.progress}
            onClick={this._onPauseTask}
            icon={"pause"}
            style={{
            }}>
            { 'Pause' }
        </Button>
          ]}>        
          <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column"
            }}>       
              <Text strong style={{ 
                fontSize: "12px", 
                color: "#CFD8DC"
              }}>
                {this.props.challenge.title}
              </Text>
              <Divider/>
              <Text strong style={{ color: "#00bcd4", fontSize: "12px" }}>
                  Task { this.taskIndex + 1 } of { this.props.challenge.tasks.length }
              </Text>
              <Text strong style={{ color: "#263238", fontSize: "14px" }}>
                  { this.props.challenge.tasks[this.taskIndex].title }
              </Text>
              { this.renderTaskTutorial() }
          </div>
      </Card>
      </div>
  }
}

export default TaskView