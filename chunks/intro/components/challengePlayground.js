import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import Task from './playground/task'
import TaskCard from './playground/taskCard'
import Editor from './playground/editor'
import ChunkyProduct from './playground/product'

export default class ChallengePlayground extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startedTask: false,
      selectedTask: null
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  selectTask = selectedTask => {
    this.setState({ selectedTask, startedTask: true })
  }

  resetTask = () => {
    this.setState({ startedTask: false, selectTask: null })
  }

  handleEditorChange = val => {
    if (JSON.parse(val)) {
      this.setState({ newValues: JSON.parse(val) })
    }
  }

  render() {
    const { challenge, defaults } = this.props
    const { taskIds, id } = challenge
    const { newValues } = this.state

    const columnStyle = {}
    return (
      <React.Fragment>
        <Row style={{ margin: '10px 20px' }}>
          <Col style={columnStyle} span={8}>
            <div>TASKS</div>
            {this.state.startedTask ? (
              <Task
                goBack={() => this.resetTask()}
                task={require(`../../../challenges/${id}/${
                  this.state.selectedTask.id
                }/index.json`)}
              />
            ) : (
              taskIds.map(task => (
                <TaskCard
                  task={require(`../../../challenges/${id}/${task}/index.json`)}
                  onSelectTask={selectedTask => this.selectTask(selectedTask)}
                />
              ))
            )}
          </Col>
          <Col style={columnStyle} span={16}>
            <div>EDITOR</div>
            {this.state.startedTask ? (
              <Editor
                value={JSON.stringify(
                  this.state.newValues ? this.state.newValues : defaults,
                  null,
                  '\t'
                )}
                onChange={val => this.handleEditorChange(val)}
              />
            ) : (
              <div>Start a task in order to use the editor</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col style={columnStyle} span={12}>
            <div>CHUNKY PRODUCT</div>
            {defaults && (
              <ChunkyProduct
                source={(newValues && newValues.source) || defaults.source}
                image={(newValues && newValues.image) || defaults.image}
                opacity={(newValues && newValues.opacity) || defaults.opacity}
                title={(newValues && newValues.title) || defaults.title}
                type={(newValues && newValues.type) || defaults.type}
                subtitle={
                  (newValues && newValues.subtitle) || defaults.subtitle
                }
                titleStyle={
                  (newValues && newValues.titleStyle) || defaults.titleStyle
                }
                subtitleStyle={
                  (newValues && newValues.subtitleStyle) ||
                  defaults.subtitleStyle
                }
              />
            )}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
